import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams }    from '@angular/common/http';
import { Login } from './models/login.models';
import { Observable, Subject, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient,
    private messageService: MessageService) {}

  private log(message: string) {
    this.messageService.add(`LoginService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


  login(login: Login): Observable<any> {
    const url = this.loginUrl+'?Username='+login.Username+'&Password='+login.Password;
    let values = new HttpParams();
    values.append("Username",login.Username);
    values.append("Password",login.Password);
    
    return this.http.get<boolean>(url);
  }
}
