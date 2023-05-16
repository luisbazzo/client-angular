import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
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

  remove(client : client): Observable<void>{
    return this.http.delete<void>(`${this.url}/${client.id}`);
  }

  update(client : client): Observable<client>{
    return this.http.put<client>(`${this.url}/${client.id}`, client);
  }
}
