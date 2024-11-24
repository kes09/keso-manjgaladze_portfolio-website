import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { environment } from './environments/environment';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // Initialize Firebase once with the configuration from environment
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // Provide Firebase Database service
    provideDatabase(() => getDatabase()),
  ],
}).catch(err => console.error(err));
