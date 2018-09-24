import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Inventorylist } from './models/inentoryList.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {


  private inventoryUrl = 'http://localhost:3000/inventorylist';

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


  getinventoryList(): Observable<any> {
    const url = this.inventoryUrl;    
    return this.http.get<any>(url);
  }

  addinventoryList(inventory:Inventorylist):Observable<any> {
    const url = this.inventoryUrl;    
    return this.http.post<any>(url,inventory)
    .pipe(
      catchError(this.handleError('addInventory', inventory))
    );;
  }

  updateinventoryList(inventory:Inventorylist):Observable<any> {
    const url = this.inventoryUrl;
    return this.http.put<any>(url,inventory).pipe(
      catchError(this.handleError('updateInventory', inventory))
    );
  }

  getItem(id:string): Observable<any> {
    const url = this.inventoryUrl+'/'+id;
    return this.http.get<any>(url);
  }

}
