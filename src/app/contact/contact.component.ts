import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.saveContactInfo(this.contactForm.value).then(() => {
        alert('Contact information submitted successfully!');
        this.contactForm.reset();
      }).catch((error: any) => {
        console.error('Error submitting contact info:', error);
        alert('There was an error submitting your contact information.');
      });
    }
  }
}
