import { bootstrapApplication } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';  
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
    ),
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));
