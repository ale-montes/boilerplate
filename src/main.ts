import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';  // Importa provideRouter
import { appConfig } from './app/app.config';  // Tu configuración (asegúrate de que sea correcta)
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // Importa las rutas

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
    ),
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));
