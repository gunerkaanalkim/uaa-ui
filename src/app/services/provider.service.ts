import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {Provider} from "../store/model";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(
    @Inject(APP_CONFIG) private config: any,
    private readonly httpClient: HttpClient,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
  ) {
  }

  getAll() {
    return this.httpClient
      .get<Provider[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getAllProviders}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  getById(id: number) {
    return this.httpClient
      .get<Provider>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProvider}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  create(provider: Provider) {
    return this.httpClient
      .post<Provider>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProvider}`, provider)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  edit(provider: Provider) {
    return this.httpClient
      .put<Provider>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProvider}`, provider)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  destroy(id: number) {
    return this.httpClient
      .delete<Provider>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProvider}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }
}
