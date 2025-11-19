import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  description: string;
  limitDate: string;
  companyId: number;
  company?: {
    id: number;
    name: string;
    bio: string;
    website: string;
    email: string;
  };
  candidates?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/jobs/${id}`);
  }
}