import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AuthGuard } from './auth.guard';
import { InventoryModifyComponent } from './inventory-modify/inventory-modify.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'inventoryList',component:InventoryListComponent ,canActivate:[AuthGuard]},
  {path:'inventoryModify/:id',component:InventoryModifyComponent,canActivate:[AuthGuard]},
  {path:'inventoryModify',component:InventoryModifyComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
