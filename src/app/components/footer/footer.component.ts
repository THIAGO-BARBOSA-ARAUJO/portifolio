import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  contact: Contact = {
    subject_matter: '',
    comment: '',
    contact: {
      name: '',
      tel: '',
      email: '',
    },
  };

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    this.contactService.getAll().subscribe((dado) => (this.contact = dado));
  }
}
