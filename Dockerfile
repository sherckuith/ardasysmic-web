# ==========================================================================
# ARDASYSMIC — multistage Dockerfile
# Stage 1: build the static export with Node.js
# Stage 2: serve with nginx:alpine (non-root, gzip, security headers)
# ==========================================================================

# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (better layer caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --no-audit --no-fund

# Copy source code
COPY . .

# Build the static export
RUN npm run build

# ---------- Stage 2: Serve ----------
FROM nginx:1.27-alpine AS runner

# Remove default config and redirect nginx pid to a non-root-writable path.
# The stock /var/run/nginx.pid is root-owned, so non-root USER 1001 aborts
# with "[emerg] open() \"/run/nginx.pid\" failed (13: Permission denied)".
RUN rm /etc/nginx/conf.d/default.conf && \
    sed -i -E 's#^[[:space:]]*pid[[:space:]].*#pid /tmp/nginx.pid;#' /etc/nginx/nginx.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/ardasysmic.conf

# Copy static export from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Create non-root user and ensure all runtime dirs are writable by UID 1001
RUN addgroup -g 1001 -S ardasysmic && \
    adduser -u 1001 -S ardasysmic -G ardasysmic && \
    chown -R ardasysmic:ardasysmic /usr/share/nginx/html && \
    chown -R ardasysmic:ardasysmic /var/cache/nginx && \
    chown -R ardasysmic:ardasysmic /var/log/nginx && \
    chown -R ardasysmic:ardasysmic /etc/nginx/conf.d && \
    chown -R ardasysmic:ardasysmic /tmp /run

# Switch to non-root user
USER ardasysmic

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
