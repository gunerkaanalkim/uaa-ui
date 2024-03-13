import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {Store} from "@ngrx/store";
import {setLoaderVisible} from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class GlobalExceptionHandlerService {


  constructor(
    private readonly store: Store
  ) {
  }

  public handleError(error: HttpErrorResponse) {
    this.store.dispatch(setLoaderVisible({isLoaderVisible: false}));

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else if (error.status === 401) {
      location.replace('/login')
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
