import { Injectable } from '@angular/core';
import { Database, ref, push, set, update, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private db: Database) {}

  saveContactInfo(contact: { name: string; email: string; message: string }): Promise<void> {
    const contactRef = ref(this.db, 'contacts');
    const newContactRef = push(contactRef);
    return set(newContactRef, contact);
  }

  updateContact(contactId: string, contact: { name: string; email: string; message: string }): Promise<void> {
    const contactRef = ref(this.db, `contacts/${contactId}`);
    return update(contactRef, contact);
  }


  getContacts(): Observable<any[]> {
    const contactRef = ref(this.db, 'contacts');
    return new Observable(observer => {
      onValue(contactRef, snapshot => {
        const data = snapshot.val();
        const contacts = data
          ? Object.keys(data).map(key => ({ id: key, ...data[key] }))
          : [];
        observer.next(contacts);
      });
    });
  }
}
