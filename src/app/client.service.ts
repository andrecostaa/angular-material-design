import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Client } from './models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients = new Subject<Client>();

  constructor() { }

  addClient(c: Client): void {
    this.clients.next(c);
  }

  getClientsSubject(): Subject<Client> {
    return this.clients;
  }

}
