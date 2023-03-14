import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private apiUrl =
    'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Contact> {
    return this.http.get<Contact>(this.apiUrl);
  }
}
