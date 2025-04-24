import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HealthService {
  constructor(private http: HttpClient) {}

  getHealth() {
    return this.http.get<{ status: string; message: string }>('http://localhost:3000/api/health');
  }
}
