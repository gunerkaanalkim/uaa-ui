import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PageableShops, SearchFilterRequest, Shop} from "../store/model";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {APP_CONFIG} from "../config/tokens";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";
import {AbstractCrudService, Upstream} from "./base/AbstractCrudService";

@Injectable({
  providedIn: 'root'
})
export class ShopService extends AbstractCrudService<Shop, PageableShops, SearchFilterRequest>{

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
      getAll: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.getAll}`,
      getAllWithoutPage: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.getAllWithoutPage}`,
      getById: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.getById}`,
      filter: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.filter}`,
      create: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.create}`,
      createAll: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.createAll}`,
      edit: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.edit}`,
      destroy: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.destroy}`,
      destroyAll: `${this.config.api.services.integrator}${this.config.api.endpoints.shop.destroyAll}`,
    };
  }


}
