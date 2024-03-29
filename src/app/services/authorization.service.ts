import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../config/tokens";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "./global-exception-handler.service";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {AssignPermissionToRoleRequest, Permission, Role, RolePermission} from "../store/model";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    @Inject(APP_CONFIG) private readonly config: any,
    private readonly httpClient: HttpClient,
    private readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
    private readonly store: Store,
    private readonly ngxSpinnerService: NgxSpinnerService
  ) {
  }

  getAssignedPermissionsOfRole(roleId: number) {
    return this.httpClient
      .get<Permission[]>(`${this.config.api.services.auth}${this.config.api.endpoints.role.getAssignedPermissionsOfRole}/${roleId}`,)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }

  assignPermissionToRole(permission: Permission, role: Role) {
    const request: AssignPermissionToRoleRequest = {
      roleId: role.id,
      permissionId: permission.id
    }

    return this.httpClient
      .post<RolePermission>(`${this.config.api.services.auth}${this.config.api.endpoints.role.assignPermission}`, request)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }
  revokePermissionToRole(permission: Permission, role: Role) {
    const request: AssignPermissionToRoleRequest = {
      roleId: role.id,
      permissionId: permission.id
    }

    return this.httpClient
      .post<RolePermission>(`${this.config.api.services.auth}${this.config.api.endpoints.role.revokePermission}`, request)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }
}
