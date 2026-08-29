FROM node:22-alpine

# Instalar dependencias del sistema
RUN apk add --no-cache git

# Establecer directorio de trabajo
WORKDIR /app

# Desactivar telemetría de Angular CLI de forma global
ENV NG_CLI_ANALYTICS=false

# Instalar Angular CLI de forma global
RUN npm install -g @angular/cli && ng config -g cli.analytics false

# Exponer el puerto por defecto de Angular
EXPOSE 4200

# Comando por defecto: inicializar si no existe package.json y levantar servidor de desarrollo
CMD ["sh", "-c", "if [ ! -f package.json ]; then echo '🚀 Inicializando proyecto Angular sin CLI local...' && ng new gestor-tareas --directory . --routing=false --style=css --skip-git --defaults --package-manager=npm; fi && echo '⚡ Arrancando servidor Angular...' && ng serve --host 0.0.0.0 --port 4200 --poll 2000"]
