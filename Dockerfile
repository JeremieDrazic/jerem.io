# ==========================================
# Stage 1: Build
# ==========================================
FROM node:22-alpine AS builder

# Installer pnpm via npm (simple et efficace)
RUN npm install -g pnpm@latest

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances (avec cache)
RUN pnpm install --frozen-lockfile

# Copier tout le code source
COPY . .

# Build de production
RUN pnpm build

# ==========================================
# Stage 2: Production (nginx)
# ==========================================
FROM nginx:alpine

# Copier les fichiers buildés depuis le stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier une config nginx custom (on va la créer après)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Commande de démarrage nginx
CMD ["nginx", "-g", "daemon off;"]