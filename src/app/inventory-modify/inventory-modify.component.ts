import { Component, OnInit } from '@angular/core';
import {InventoryServiceService} from '../inventory-service.service'
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-inventory-modify',
  templateUrl: './inventory-modify.component.html',
  styleUrls: ['./inventory-modify.component.css']
})
export class InventoryModifyComponent implements OnInit {

  model:any={};
  productDisable:boolean=false;
  suppliers:any={};
  constructor(public inventoryService:InventoryServiceService,private route: ActivatedRoute,public supplierService:SupplierService) {
      supplierService.getItem().subscribe(list=>
      {
        this.suppliers=list
      });
    if(this.route.snapshot.paramMap.keys.length>0)
    {      
      this.productDisable=true;
      this.inventoryService.getItem(this.route.snapshot.params.id).subscribe(list=>
        {
          this.model=list
        });
    }    
   }

  ngOnInit() {    
   
  }

  onSubmit()
  {
    if(this.route.snapshot.paramMap.keys.length>0)
    {
      this.inventoryService.updateinventoryList(this.model).subscribe(list=>
        {
          this.model=list.inventory;
          alert('Inventory updated succesfully.');
        });
    }
    else{
      this.inventoryService.addinventoryList(this.model).subscribe(list=>
        {        
          if(list.message=="duplicate")
          {
            alert('DUplicate product');
          }
          else{            
            alert('Inventory added succesfully.');
            location.reload();  
          }          
        });
    }
  }

}
