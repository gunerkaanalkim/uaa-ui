import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {Brand, Category, ProductResponse} from "../store/model";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(
    @Inject(APP_CONFIG) private config: any,
    private readonly httpClient: HttpClient,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
  ) {
  }

  getAllBrands(providerAlias: string) {
    return this.httpClient
      .get<Brand[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getAllBrands}/${providerAlias}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  getProductsByBrand(providerAlias: string, brandId: number, page: number) {
    return this.httpClient
      .get<ProductResponse>(`${this.config.api.services.integrator}${this.config.api.endpoints.getProductsByBrand}/${providerAlias}/${brandId}/${page}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  getAllCategories(providerAlias: string) {
    return this.httpClient
      .get<Category[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getAllCategories}/${providerAlias}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  getProductsByCategory(providerAlias: string, categoryId: number, page: number) {
    return this.httpClient
      .get<ProductResponse>(`${this.config.api.services.integrator}${this.config.api.endpoints.getProductsByCategory}/${providerAlias}/${categoryId}/${page}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  addToProductDb(providerAlias: string, productId: number) {
    return this.httpClient
      .post<ProductResponse>(`${this.config.api.services.integrator}${this.config.api.endpoints.addToProductDb}/${providerAlias}`, {
        productId: productId
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }
}
