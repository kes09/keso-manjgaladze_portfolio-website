import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import {environment} from './environments/environment';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"redberry-fd2e3","appId":"1:576569387231:web:53e7f140bb6f7778b4a16a","databaseURL":"https://redberry-fd2e3-default-rtdb.firebaseio.com","storageBucket":"redberry-fd2e3.firebasestorage.app","apiKey":"AIzaSyBY703T2h7Sd5r2fOZR2a7M3I49DUHYP_E","authDomain":"redberry-fd2e3.firebaseapp.com","messagingSenderId":"576569387231","measurementId":"G-CV3599Z7VK"})), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"redberry-fd2e3","appId":"1:576569387231:web:53e7f140bb6f7778b4a16a","databaseURL":"https://redberry-fd2e3-default-rtdb.firebaseio.com","storageBucket":"redberry-fd2e3.firebasestorage.app","apiKey":"AIzaSyBY703T2h7Sd5r2fOZR2a7M3I49DUHYP_E","authDomain":"redberry-fd2e3.firebaseapp.com","messagingSenderId":"576569387231","measurementId":"G-CV3599Z7VK"})), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"redberry-fd2e3","appId":"1:576569387231:web:53e7f140bb6f7778b4a16a","databaseURL":"https://redberry-fd2e3-default-rtdb.firebaseio.com","storageBucket":"redberry-fd2e3.firebasestorage.app","apiKey":"AIzaSyBY703T2h7Sd5r2fOZR2a7M3I49DUHYP_E","authDomain":"redberry-fd2e3.firebaseapp.com","messagingSenderId":"576569387231","measurementId":"G-CV3599Z7VK"})), provideDatabase(() => getDatabase()),]
}).catch(err => console.error(err));
