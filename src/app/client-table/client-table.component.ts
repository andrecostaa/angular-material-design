import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ClientService } from '../client.service';
import { Client } from '../models/client.model';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  @ViewChild(MatTable) tabela: MatTable<any>;

  displayedColumns: string[] = ['ID', 'First Name', 'Last Name', 'Age'];
  
  @Input() dataSource: Client[] = [];
  
  constructor(private cliService: ClientService) { }

  ngOnInit(): void { 
    this.cliService.getClientsSubject()
    .subscribe((c)=>{
      this.tabela.renderRows();
    });
  }

}
