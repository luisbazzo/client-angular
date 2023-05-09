import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  url = "http://localhost:3000/clients";

  constructor(private http : HttpClient) { }

  getClients(): Observable<client[]>{
    return this.http.get<client[]>(this.url);
  }

  save(client : client): Observable<client>{
    return this.http.post<client>(this.url, client);
  }
}
