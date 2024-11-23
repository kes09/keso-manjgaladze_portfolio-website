import { Injectable } from '@angular/core';
import { Database, ref, push, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private db: Database) {}

  saveContactInfo(contact: { name: string; email: string; message: string }) {
    const contactRef = ref(this.db, 'contacts');
    const newContactRef = push(contactRef);
    return set(newContactRef, contact);
  }
}
