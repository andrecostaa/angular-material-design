import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  id: number = 0;
  firstName: string = "";
  lastName: string = "";
  age: number = 0;

  @Output() clientEmitter = new EventEmitter()

  constructor(private cliService: ClientService) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.validInputs()) {
      let clientModel: Client = {
        id: ++this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age
      }
      this.clientEmitter.emit(clientModel);
      this.cliService.addClient(clientModel);
      this.clearInputs();
    } else {
      alert('Favor preencher todos os campos!');
    }

  }

  validInputs(): boolean {
    return (this.firstName.length != 0 &&
      this.lastName.length != 0 &&
      this.age > 0)
  }

  clearInputs(): void {
    this.firstName = "";
    this.lastName = "";
    this.age = 0;
  }

}




