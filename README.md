# Boilerplate Angular + Node.js 🚗

Este proyecto es un **boilerplate** básico que sirve como punto de partida para desarrollar aplicaciones full stack con un frontend en **Angular standalone** y un backend en **Node.js/Express**. Incluye un ejemplo funcional de conexión entre ambos mediante una verificación de salud de la API.

## 🧱 Tecnologías utilizadas

- Frontend: Angular 17+ (Standalone Components)
- Backend: Node.js + Express
- Comunicación HTTP con `HttpClient` (usando `provideHttpClient()`)

---

## 📁 Estructura del Proyecto

<pre> 
/frontend
└── src/app
    ├── components/health.component.ts        # Componente para estado del backend
    ├── services/health.service.ts           # Servicio HTTP
    ├── app.component.ts / html / css        # Componente principal
    ├── app.config.ts                        # Configuración inicial
    ├── app.routes.ts                        # Rutas del frontend
    └── main.ts                              # Bootstrap con provideHttpClient

/backend
└── src
    ├── config/env.ts                        # Variables de entorno
    ├── controllers/health.controller.ts     # Lógica de ruta /api/health
    ├── middlewares/notFound.middleware.ts   # Middleware de ruta no encontrada
    ├── models/                              # Carpeta para modelos de datos
    ├── routes/index.ts                      # Router principal
    ├── services/                            # Carpeta para servicios de negocio
    ├── app.ts                               # Configuración de Express
    └── server.ts                            # Inicialización del servidor
</pre>

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/ale-montes/frontend.git
cd frontend
```

### 2. Backend

```bash
cd backend
npm install
npm start
```

Esto inicia un servidor en `http://localhost:3000/api/health`

### 3. Frontend

```bash
cd frontend
npm install
npm start
```

Esto inicia el frontend en `http://localhost:4200` (o el puerto que Vite defina)

---

## 🔗 Rutas importantes

- `GET /api/health` → Verifica el estado del backend
- `http://localhost:4200/health` → Página del frontend que muestra el estado

---

## 📦 TODOs y mejoras

- [ ] Agregar autenticación
- [ ] Implementar tests unitarios y e2e
- [ ] Despliegue con Docker

---

## 🧑‍💻 Autor

- Hecho con ❤️ por [Ale Montes](https://github.com/ale-montes)
