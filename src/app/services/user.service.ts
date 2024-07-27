import {Inject, Injectable} from '@angular/core';
import {AbstractCrudService, Upstream} from "./base/AbstractCrudService";
import {PageableUsers, SearchFilterRequest, User} from "../store/model";
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {setHttpError} from "../store/project.action";

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractCrudService<User, PageableUsers, SearchFilterRequest>{

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
      getAll: `${this.config.api.services.auth}${this.config.api.endpoints.user.getAll}`,
      getAllWithoutPage: `${this.config.api.services.auth}${this.config.api.endpoints.user.getAllWithoutPage}`,
      getById: `${this.config.api.services.auth}${this.config.api.endpoints.user.getById}`,
      filter: `${this.config.api.services.auth}${this.config.api.endpoints.user.filter}`,
      create: `${this.config.api.services.auth}${this.config.api.endpoints.user.create}`,
      createAll: `${this.config.api.services.auth}${this.config.api.endpoints.user.createAll}`,
      edit: `${this.config.api.services.auth}${this.config.api.endpoints.user.edit}`,
      destroy: `${this.config.api.services.auth}${this.config.api.endpoints.user.destroy}`,
      destroyAll: `${this.config.api.services.auth}${this.config.api.endpoints.user.destroyAll}`,
    };
  }
}
