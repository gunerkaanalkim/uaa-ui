import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {PageableProducts, Product, ProductImage} from "../store/model";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    @Inject(APP_CONFIG) private config: any,
    private readonly httpClient: HttpClient,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
  ) {
  }

  getAll(pageNo : number) {
    return this.httpClient
      .get<PageableProducts>(`${this.config.api.services.integrator}${this.config.api.endpoints.getAllProducts}?pageNo=${pageNo}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  getProductImages(productId: number) {
    return this.httpClient
      .get<ProductImage[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getProductImages}/${productId}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  getById(id: number) {
    return this.httpClient
      .get<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProduct}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  create(product: Product) {
    return this.httpClient
      .post<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProduct}`, product)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  edit(product: Product) {
    return this.httpClient
      .put<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProduct}`,  product)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  destroy(id: number) {
    return this.httpClient
      .delete<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.createProduct}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }
}
