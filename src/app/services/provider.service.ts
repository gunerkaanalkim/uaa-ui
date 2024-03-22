import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {PageableProviders, Provider, SearchFilterRequest} from "../store/model";
import {catchError, config} from "rxjs";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";
import {AbstractCrudService, Upstream} from "./base/AbstractCrudService";

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends AbstractCrudService<Provider, PageableProviders, SearchFilterRequest>{
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
      getAll: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.getAll}`,
      getAllWithoutPage: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.getAllWithoutPage}`,
      getById: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.getById}`,
      filter: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.filter}`,
      create: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.create}`,
      createAll: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.createAll}`,
      edit: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.edit}`,
      destroy: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.destroy}`,
      destroyAll: `${this.config.api.services.integrator}${this.config.api.endpoints.provider.destroyAll}`,
    };
  }


}
