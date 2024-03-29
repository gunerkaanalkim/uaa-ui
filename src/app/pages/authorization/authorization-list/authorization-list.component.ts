import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../../services/role.service";
import {Permission, Role} from "../../../store/model";
import {AuthorizationService} from "../../../services/authorization.service";
import {PermissionService} from "../../../services/permission.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-authorization-list',
  templateUrl: './authorization-list.component.html',
  styleUrls: ['./authorization-list.component.scss']
})
export class AuthorizationListComponent implements OnInit {

  roles: Role[] = [];
  permissions: Permission[] = [];
  selectedRole: Role | null = null;

  constructor(
    private readonly roleService: RoleService,
    private readonly permissionService: PermissionService,
    private readonly authorizationService: AuthorizationService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.getRoleAndPermissionList();
  }

  getRoleAndPermissionList() {
    this.spinner.show()

    this.roleService
      .getAllWithoutPage()
      .subscribe(roles => {
        this.roles = roles;
        this.spinner.hide()
      })

    this.permissionService
      .getAllWithoutPage()
      .subscribe(permissions => {
        this.permissions = permissions;
        this.spinner.hide()
      })
  }

  onRoleChange(role: Role) {
    this.spinner.show()

    this.selectedRole = role;

    this.permissions.forEach(permission => {
      permission.isAssigned = false;
    })

    this
      .authorizationService
      .getAssignedPermissionsOfRole(role.id)
      .subscribe(assignedPermissions => {
        assignedPermissions.forEach(assignedPermission => {
          const granted = this.permissions
            .filter(permission => permission.id === assignedPermission.id)[0];

          granted.isAssigned = true;
        })

        this.spinner.hide()
      })
  }

  onPermissionChange(permission: Permission, event: Event) {
    const target = (event.target as HTMLInputElement)!;
    this.spinner.show()

    if (target.checked) {
      this.authorizationService.assignPermissionToRole(permission, this.selectedRole!)
        .subscribe(response => {
          this.spinner.hide()
        })
    } else {
      this.authorizationService.revokePermissionToRole(permission, this.selectedRole!)
        .subscribe(response => {
          this.spinner.hide()

        })
    }

  }


}
