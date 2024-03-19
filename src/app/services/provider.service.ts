import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {Provider} from "../store/model";
import {catchError} from "rxjs";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(
    @Inject(APP_CONFIG) private config: any,
    private readonly httpClient: HttpClient,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
    private readonly store: Store,
    private spinner: NgxSpinnerService
  ) {
    this.store.dispatch(setHttpError({httpError: null}))
  }

  getAll() {
    return this.httpClient
      .get<Provider[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getAllProviders}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  getById(id: number) {
    return this.httpClient
      .get<Provider>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProvider}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  create(provider: Provider) {
    return this.httpClient
      .post<Provider>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProvider}`, provider)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  edit(provider: Provider) {
    return this.httpClient
      .put<Provider>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProvider}`, provider)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  destroy(id: number) {
    return this.httpClient
      .delete<Provider>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProvider}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }
}
