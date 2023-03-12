import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  momentForm!: FormGroup;
  send_email_sucess: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.momentForm.get('email')!;
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get name() {
    return this.momentForm.get('name')!;
  }

  get message() {
    return this.momentForm.get('message')!;
  }

  submit(e: Event): void {
    if (this.momentForm.invalid) {
      return;
    }

    e.preventDefault();

    emailjs
      .sendForm(
        'service_u2nazj6',
        'template_mbzd2vo',
        e.target as HTMLFormElement,
        'aqhIdBmVH6C1qwkIt'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.send_email_sucess = true;
        },
        (error) => {
          console.log(error.text);
        }
    );
    
    setTimeout(() => {
      this.send_email_sucess = false;
     }, 10000)
  }
}
