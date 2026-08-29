# 🚀 Gestor de Tareas Dockerizado (Angular 22 + Docker)

Aplicación moderna de gestión de tareas desarrollada con **Angular 22** y completamente contenedorizada con **Docker** y **Docker Compose**. Permite clonar y ejecutar el proyecto al instante sin necesidad de instalar Node.js, npm ni Angular CLI en el equipo local.

---

## ✨ Características

- 🐳 **Entorno 100% Contenedorizado**: Ejecución transparente con Docker y Docker Compose con hot-reload activado.
- ⚡ **Angular 22 Standalone**: Componentes modernos basados en arquitectura standalone y TypeScript.
- 📅 **Interpolación & Pipes**: Uso de `{{ title }}` y transformación visual con `{{ today | date:'fullDate' }}`.
- 🔄 **Two-Way Data Binding**: Sincronización bidireccional mediante `FormsModule` y directiva `[(ngModel)]`.
- 🎯 **Eventos**: Creación dinámica de tareas con captura de eventos `(click)` y `(keyup.enter)`.
- 🔀 **Control de Flujo Moderno**: Manejo de lógica visual y listas reactivas con `@if` y `@for`.
- 🎨 **Diseño Glassmorphism Premium**: Interfaz elegante, responsiva, con tipografía *Plus Jakarta Sans*, gradientes y micro-animaciones.

---

## 🚀 Inicio Rápido con Docker

### Prerrequisitos
- Tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/).

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

### 2. Levantar la aplicación
```bash
docker compose up -d
```

### 3. Abrir en el navegador
Ingresa a:
```text
http://localhost:4200
```

---

## 🛠️ Comandos Útiles

| Acción | Comando |
| :--- | :--- |
| **Iniciar contenedor** | `docker compose up -d` |
| **Ver logs en tiempo real** | `docker compose logs -f` |
| **Detener contenedor** | `docker compose down` |
| **Reconstruir imagen** | `docker compose up --build -d` |

---

## 📁 Estructura del Proyecto

```text
├── Dockerfile              # Configuración de imagen Node 22 con Angular CLI
├── docker-compose.yml       # Mapeo de puertos, volúmenes y variables de entorno
├── src/
│   ├── app/
│   │   ├── app.ts          # Lógica TypeScript (Standalone Component)
│   │   ├── app.html        # Plantilla HTML con @if, @for y pipes
│   │   └── app.css         # Estilos Glassmorphism del componente
│   ├── index.html          # HTML principal
│   └── styles.css         # Estilos globales y Google Fonts
├── angular.json            # Configuración de Angular Workspace
└── package.json            # Dependencias del proyecto
```
