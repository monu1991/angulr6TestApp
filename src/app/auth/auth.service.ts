import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  get isLoggedIn() {
    let user=localStorage.getItem('Username');
    let pass=localStorage.getItem('Password');
    if(!user || !pass)
      return false;
    else
      return true;
  }

}