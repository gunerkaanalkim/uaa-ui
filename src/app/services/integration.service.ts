import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {Brand, ProductResponse} from "../store/model";
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

  getProductsByBrand(providerAlias: string, brandId: number) {
    return this.httpClient
      .get<ProductResponse>(`${this.config.api.services.integrator}${this.config.api.endpoints.getProductsByBrand}/${providerAlias}/${brandId}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError));
  }
}
