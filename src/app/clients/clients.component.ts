import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';
import { client } from '../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  Clients : client[] = [];

  constructor(private ClientsService : ClientsService){

  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.ClientsService.getClients().subscribe(
      {
        next : data => this.Clients = data,
        error : () => console.log("Erro ao chamar o endpoint")
      }
    );
  }
}
