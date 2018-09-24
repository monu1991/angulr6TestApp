import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { MessageService } from '../message.service';
import { Login } from '../models/login.models';
import { FormGroup } from '@angular/forms';
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //private loginService: LoginService;
  public Username:string;
  public Password:string;
  model: any = {};
  @Input() form: FormGroup;
  constructor(    
    public loginService:LoginService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    localStorage.clear();
  }
  private log(message: string) {
    this.messageService.add(`LoginService: ${message}`);
  }
  login()
  {
    let params = new HttpParams().set('Username', this.model.username).set('Password', this.model.password)
    let login=new Login();
    login.Password=this.model.password;
    login.Username=this.model.username;
    let result=this.loginService.login(login)
      .subscribe(lg => 
          { 
            if(!lg.Result){
                alert('The User Name and Password doesn\'t match.');
                location.reload();
            }
            else{
              localStorage.setItem("Username", lg.Username);
              localStorage.setItem("Password", lg.Password);
              window.location.href='/inventoryList';
            }
          }
        );
  }

}
