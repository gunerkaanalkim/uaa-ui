import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG} from "../config/tokens";
import {catchError} from "rxjs";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(APP_CONFIG) private config: any,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService
  ) {
  }

  whoAmI() {
    return this.httpClient.get(`${this.config.api.url}${this.config.api.endpoints.whoAmI}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }
}
