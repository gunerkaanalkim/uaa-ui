import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { throwError } from "rxjs";
import { setHttpError } from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class GlobalExceptionHandlerService {
  constructor(
  ) {
  }

  public handleError(error: HttpErrorResponse) {
    //@ts-ignore
    this.store.dispatch(setHttpError({httpError: error.error}))
    //@ts-ignore
    this.spinner.hide();

    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else if (error.status === 401) {
      location.replace('/login')
    } else if (error.status === 403) {
      //@ts-ignore
      this.store.dispatch(setHttpError({httpError: {
          message: "Username or password are incorrect.",
          status: 403,
          trace: "string",
          timestamp: "string",
          error: "string",
          path: "string"
        }}))

    } else {
      if (error.error.message === "401 Token not valid.") {
        location.replace('/login')
      }
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
