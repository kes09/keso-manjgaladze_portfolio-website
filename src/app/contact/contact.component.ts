import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contacts: any[] = []; 
  editMode: boolean = false; 
  selectedContactId: string | null = null; 

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadContacts(); 
  }

  
  onSubmit(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;

      if (this.editMode && this.selectedContactId) {
        
        this.contactService.updateContact(this.selectedContactId, contactData).then(() => {
          alert('Contact updated successfully!');
          this.resetForm();
          this.loadContacts();
        }).catch(error => {
          console.error('Error updating contact:', error);
          alert('Failed to update the contact.');
        });
      } else {
        this.contactService.saveContactInfo(contactData).then(() => {
          alert('Contact created successfully!');
          this.resetForm();
          this.loadContacts();
        }).catch(error => {
          console.error('Error creating contact:', error);
          alert('Failed to create the contact.');
        });
      }
    }
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  
  editContact(contactId: string, contact: any): void {
    this.editMode = true;
    this.selectedContactId = contactId;
    this.contactForm.patchValue(contact);
  }

 
  resetForm(): void {
    this.contactForm.reset();
    this.editMode = false;
    this.selectedContactId = null;
  }
}
