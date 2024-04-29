import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {APP_CONFIG} from "../config/tokens";
import {catchError} from "rxjs";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {AuthenticationResponse} from "../store/model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    @Inject(APP_CONFIG) private readonly config: any,
    private readonly httpClient: HttpClient,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
    private readonly store: Store,
    private spinner: NgxSpinnerService
  ) {
    this.store.dispatch(setHttpError({httpError: null}))
  }

  whoAmI() {
    return this.httpClient
      .get<AuthenticationResponse>(`${this.config.api.services.auth}${this.config.api.endpoints.authenticate.whoAmI}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }


  login(username: string, password: string) {
    const body = new HttpParams(
      {
      fromObject: {
        username,
        password,
        client_id: "external-client",
        grant_type: "password"
      }
    });

    return this.httpClient
      .post<AuthenticationResponse>(`${this.config.api.services.auth}${this.config.api.endpoints.authenticate.login}`, body.toString(),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        })
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

}
