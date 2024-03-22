import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {
  Brand,
  Category, GenerateContentRequest, GenerateContentResponse,
  Product,
  ProductImage,
  ProductResponse,
  ProductVariant,
  ProductVariantOption
} from "../store/model";
import {catchError} from "rxjs";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(
    @Inject(APP_CONFIG) private config: any,
    private readonly httpClient: HttpClient,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
    private readonly store: Store,
    private spinner: NgxSpinnerService
  ) {
    this.store.dispatch(setHttpError({httpError: null}))
  }

  getAllBrands(providerAlias: string) {
    return this.httpClient
      .get<Brand[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.getAllBrands}/${providerAlias}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  getProductsByBrand(providerAlias: string, brandId: number, page: number) {
    return this.httpClient
      .get<ProductResponse>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.getProductsByBrand}/${providerAlias}/${brandId}/${page}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  getAllCategories(providerAlias: string) {
    return this.httpClient
      .get<Category[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.getAllCategories}/${providerAlias}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  getProductsByCategory(providerAlias: string, categoryId: number, page: number) {
    return this.httpClient
      .get<ProductResponse>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.getProductsByCategory}/${providerAlias}/${categoryId}/${page}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  addToProductDb(providerAlias: string, productId: number, shopId: number) {
    return this.httpClient
      .post<Product>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.addToProductDb}/${providerAlias}`, {
        productId: productId,
        shopId: shopId
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  saveProductImages(productId: number, images: ProductImage[]) {
    return this.httpClient
      .post<ProductImage[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.saveProductImages}`, {
        productId: productId,
        images: images
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  saveProductVariants(productId: number, variants: ProductVariant[]) {
    return this.httpClient
      .post<ProductVariant[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.saveProductVariants}`, {
        productId: productId,
        variants: variants
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  saveProductVariantOptions(productId: number, providerAlias: string) {
    return this.httpClient
      .post<ProductVariantOption[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.saveProductVariantOptions}`, {
        productId: productId,
        providerAlias: providerAlias
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }

  generateContent(generateContentRequest: GenerateContentRequest) {
    return this.httpClient
      .post<GenerateContentResponse>(`${this.config.api.services.integrator}${this.config.api.endpoints.integration.generateContent}`, {
        ...generateContentRequest
      })
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.spinner
      })))
  }
}
