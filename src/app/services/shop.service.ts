import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shop} from "../store/model";
import {catchError} from "rxjs";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {APP_CONFIG} from "../config/tokens";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

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
