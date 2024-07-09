import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_CONFIG} from "../config/tokens";
import {catchError} from "rxjs";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    @Inject(APP_CONFIG) private config: any,
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
    private readonly store: Store,
    private spinner: NgxSpinnerService
  ) {
    this.store.dispatch(setHttpError({httpError: null}))
  }

  whoAmI() {
    return this.httpClient
      .get<any>(`${this.config.api.services.auth}${this.config.api.endpoints.authenticate.whoAmI}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }


  login(username: string, password: string) {
    return this.httpClient
      .post<any>(`${this.config.api.services.auth}${this.config.api.endpoints.authenticate.login}`, {
        username: username,
        password: password,
        realmId: 1
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

}
