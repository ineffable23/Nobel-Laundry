import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laundry } from '../models/laundry.model';
const baseUrl = 'http://localhost:8080/api/laundrys';
@Injectable({
  providedIn: 'root'
})
export class LaundryService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Laundry[]> {
    return this.http.get<Laundry[]>(baseUrl);
  }
  get(id: any): Observable<Laundry> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByUsername(username: any): Observable<Laundry[]> {
    return this.http.get<Laundry[]>(`${baseUrl}?username=${username}`);
  }
}