import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http : HttpClient) { }

  getClients(): Observable<client[]>{
    let url = "http://localhost:3000/clients";
    return this.http.get<client[]>(url);
  }
}
