import { Component, OnInit } from '@angular/core';
import { InventoryServiceService } from '../inventory-service.service';
import { MessageService } from '../message.service';
import { Inventorylist } from '../models/inentoryList.model';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams }    from '@angular/common/http';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  model: any = {};
  inventoryUrl='http://localhost:3000/inventoryList';

  constructor(    
    private http: HttpClient,
    private inventoryService:InventoryServiceService,
    private messageService: MessageService  
    ) { 
      inventoryService.getinventoryList().subscribe(list=>
        {
          this.model.inventoryList=list
        });
    }
  
  ngOnInit() {  }
  private log(message: string) {
    this.messageService.add(`InventoryService: ${message}`);
  }  

  editItem(id)
  {
    location.href='/inventoryModify/'+id;
  }
}
