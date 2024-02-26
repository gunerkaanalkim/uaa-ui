import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {Shop} from "../store/model";
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
      .get<Shop[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getAllShops}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  getById(id: number) {
    return this.httpClient
      .get<Shop>(`${this.config.api.services.integrator}${this.config.api.endpoints.createShop}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  create(shop: Shop) {
    return this.httpClient
      .post<Shop>(`${this.config.api.services.integrator}${this.config.api.endpoints.createShop}`, shop)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  edit(shop: Shop) {
    return this.httpClient
      .put<Shop>(`${this.config.api.services.integrator}${this.config.api.endpoints.createShop}`, shop)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  destroy(id: number) {
    return this.httpClient
      .delete<Shop>(`${this.config.api.services.integrator}${this.config.api.endpoints.createShop}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }
}
