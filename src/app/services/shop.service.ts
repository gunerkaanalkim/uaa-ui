import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shop} from "../store/model";
import {catchError} from "rxjs";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {APP_CONFIG} from "../config/tokens";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

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
      .get<Shop[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getAllShops}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })));
  }

  getById(id: number) {
    return this.httpClient
      .get<Shop>(`${this.config.api.services.integrator}${this.config.api.endpoints.createShop}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  create(shop: Shop) {
    return this.httpClient
      .post<Shop>(`${this.config.api.services.integrator}${this.config.api.endpoints.createShop}`, shop)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  edit(shop: Shop) {
    return this.httpClient
      .put<Shop>(`${this.config.api.services.integrator}${this.config.api.endpoints.createShop}`, shop)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  destroy(id: number) {
    return this.httpClient
      .delete<Shop>(`${this.config.api.services.integrator}${this.config.api.endpoints.createShop}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }
}
