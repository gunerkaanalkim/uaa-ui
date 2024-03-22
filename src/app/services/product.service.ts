import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {PageableProducts, Product, ProductImage, SearchFilterRequest} from "../store/model";
import {catchError} from "rxjs";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";
import {AbstractCrudService, Upstream} from "./base/AbstractCrudService";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractCrudService<Product, PageableProducts, SearchFilterRequest> {
  constructor(
    @Inject(APP_CONFIG) protected override config: any,
    protected override httpClient: HttpClient,
    protected override globalExceptionHandlerService: GlobalExceptionHandlerService,
    protected override store: Store,
    protected override ngxSpinnerService: NgxSpinnerService
  ) {
    super(config, httpClient, globalExceptionHandlerService, store, ngxSpinnerService);
    this.store.dispatch(setHttpError({httpError: null}))
  }

  getRoutes(): Upstream {
    return {
      getAll: `${this.config.api.services.integrator}${this.config.api.endpoints.product.getAll}`,
      getAllWithoutPage: `${this.config.api.services.integrator}${this.config.api.endpoints.product.getAllWithoutPage}`,
      getById: `${this.config.api.services.integrator}${this.config.api.endpoints.product.getById}`,
      filter: `${this.config.api.services.integrator}${this.config.api.endpoints.product.filter}`,
      create: `${this.config.api.services.integrator}${this.config.api.endpoints.product.create}`,
      createAll: `${this.config.api.services.integrator}${this.config.api.endpoints.product.createAll}`,
      edit: `${this.config.api.services.integrator}${this.config.api.endpoints.product.edit}`,
      destroy: `${this.config.api.services.integrator}${this.config.api.endpoints.product.destroy}`,
      destroyAll: `${this.config.api.services.integrator}${this.config.api.endpoints.product.destroyAll}`,
    };
  }

  getProductImages(productId: number) {
    return this.httpClient
      .get<ProductImage[]>(`${this.config.api.services.integrator}${this.config.api.endpoints.getProductImages}/${productId}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }
}
