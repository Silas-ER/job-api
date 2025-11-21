import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
  id: number;
  name: string;
  bio: string;
  website: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class CompaniesService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/companies/${id}`);
  }
}