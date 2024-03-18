import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {
  Brand,
  Category,
  Product,
  ProductImage,
  ProductResponse,
  ProductVariant,
  ProductVariantOption
} from "../store/model";
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

  addToProductDb(providerAlias: string, productId: number, shopId: number) {
    return this.httpClient
      .post<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.addToProductDb}/${providerAlias}`, {
        productId: productId,
        shopId: shopId
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  saveProductImages(productId: number, images: ProductImage[]) {
    return this.httpClient
      .post<ProductImage[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.saveProductImages}`, {
        productId: productId,
        images: images
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  saveProductVariants(productId: number, variants: ProductVariant[]) {
    return this.httpClient
      .post<ProductVariant[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.saveProductVariants}`, {
        productId: productId,
        variants: variants
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }

  saveProductVariantOptions(productId: number, providerAlias: string) {
    return this.httpClient
      .post<ProductVariantOption[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.saveProductVariantOptions}`, {
        productId: productId,
        providerAlias: providerAlias
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }
}
