import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomerAsset } from '../models/customer-asset.model';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

// const baseUrl = environment.baseUrl;
const baseUrl = environment.baseUrl;

@Injectable()
export class CustomerAssetService {
  constructor(private http: HttpClient) {}

  getCustomerAssets(): Observable<CustomerAsset[]> {
    return this.http.get<any>(`${baseUrl}/assets/`).pipe(
      map(res => {
        if (!res.data) {
          throw new Error('Value expected!');
        }
        return res.data;
      }),
      catchError(error => this.handleError(error))
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.'
    );
  }
}
