import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private serviceUrl = 'http://localhost:3000/suppplierList';
  constructor(private http: HttpClient) { }

  getItem(): Observable<any> {
    const url = this.serviceUrl;
    return this.http.get<any>(url);
  }
}
