import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth.guard';
import { InventoryModifyComponent } from './inventory-modify/inventory-modify.component';
import { DecimalPipe } from './decimal.pipe';
import { ThousandSeparatorPipe } from './thousand-separator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventoryListComponent,
    InventoryModifyComponent,
    DecimalPipe,
    ThousandSeparatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule   
  ],
  providers: [
    AuthService,
    AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
