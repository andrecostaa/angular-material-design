import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from './models/client.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'estudos01';

  @Output() clients: Client[] = [];

  ngOnInit(): void { }

  sendClientEmitter(event: Client) {
    this.clients.push(event);
  }
}
