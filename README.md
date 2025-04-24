# Boilerplate Angular + Node.js – Verificación de Salud del Backend 🚗

Este proyecto es un **boilerplate** básico que sirve como punto de partida para desarrollar aplicaciones full stack con un frontend en **Angular standalone** y un backend en **Node.js/Express**. Incluye un ejemplo funcional de conexión entre ambos mediante una verificación de salud de la API.

## 🧱 Tecnologías utilizadas

- Frontend: Angular 17+ (Standalone Components)
- Backend: Node.js + Express
- Comunicación HTTP con `HttpClient` (usando `provideHttpClient()`)

---

## 📁 Estructura del Proyecto

```
/frontend
  ├── src/app/components/health.component.ts   // Componente que consulta al backend
  ├── src/app/services/health.service.ts       // Servicio HTTP para health-check
  ├── src/main.ts                              // Bootstrap con provideHttpClient
  └── ...

/backend
  └── index.js (o app.js)                      // API REST con ruta /api/health
```

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/ale-montes/boilerplate.git
cd boilerplate
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
