import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';
import { client } from '../client';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  Clients : client[] = [];
  formGroupClient : FormGroup;
  isEditing : boolean = false;

  constructor(private ClientsService : ClientsService,
              private formBuilder : FormBuilder
              ){
    this.formGroupClient = formBuilder.group({
      id : [''],
      name : [''],
      email : ['']
    });
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

  save(){
    if(this.isEditing){
      this.ClientsService.update(this.formGroupClient.value).subscribe(
        {
          next : () => {
            this.loadClients();
            this.formGroupClient.reset();
            this.isEditing = false;
          }
        }
      );
    }
    else{
      this.ClientsService.save(this.formGroupClient.value).subscribe(
        {
          next : data => {
            this.Clients.push(data);
            this.formGroupClient.reset();
          }
        }
      );
    }
  }

  edit(client : client){
    this.formGroupClient.setValue(client);
    this.isEditing = true;
  }

  delete(client : client): void{
    this.ClientsService.remove(client).subscribe({
      next: () => this.loadClients()
    });
  }
}
