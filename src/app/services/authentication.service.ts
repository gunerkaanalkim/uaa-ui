import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG} from "../config/tokens";
import {catchError} from "rxjs";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {UserDetails} from "../store/model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    @Inject(APP_CONFIG) private config: any,
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
  ) {
  }

  whoAmI() {
    return this.httpClient
      .get<UserDetails>(`${this.config.api.services.auth}${this.config.api.endpoints.whoAmI}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }


  login(username: string, password: string) {
    return this.httpClient
      .post<UserDetails>(`${this.config.api.services.auth}${this.config.api.endpoints.login}`, {
        username: username,
        password: password
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

}
