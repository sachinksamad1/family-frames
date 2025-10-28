import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private baseUrl = 'http://localhost:5000/api/ai';

  constructor(private http: HttpClient) { }

  generateFamilyPhoto(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/generate`, formData);
  }
}
