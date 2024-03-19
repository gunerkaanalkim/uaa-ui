import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {PageableProducts, Product, ProductImage} from "../store/model";
import {catchError} from "rxjs";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    @Inject(APP_CONFIG) private config: any,
    private readonly httpClient: HttpClient,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
    private readonly store: Store,
    private spinner: NgxSpinnerService
  ) {
    this.store.dispatch(setHttpError({httpError: null}))
  }

  getAll(pageNo : number) {
    return this.httpClient
      .get<PageableProducts>(`${this.config.api.services.integrator}${this.config.api.endpoints.getAllProducts}?pageNo=${pageNo}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  getProductImages(productId: number) {
    return this.httpClient
      .get<ProductImage[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getProductImages}/${productId}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  getById(id: number) {
    return this.httpClient
      .get<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProduct}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  create(product: Product) {
    return this.httpClient
      .post<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProduct}`, product)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  edit(product: Product) {
    return this.httpClient
      .put<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProduct}`,  product)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  destroy(id: number) {
    return this.httpClient
      .delete<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.deleteProduct}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }
}
