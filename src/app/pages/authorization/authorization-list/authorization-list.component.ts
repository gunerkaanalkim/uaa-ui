import {Component, OnInit} from '@angular/core';
import {Permission, Role} from "../../../store/model";
import {AuthorizationService} from "../../../services/authorization.service";
import {PermissionService} from "../../../services/permission.service";
import {NgxSpinnerService} from "ngx-spinner";
import * as _ from 'lodash';
import {RoleService} from "../../../services/role.service";


@Component({
  selector: 'app-authorization-list',
  templateUrl: './authorization-list.component.html',
  styleUrls: ['./authorization-list.component.scss']
})
export class AuthorizationListComponent implements OnInit {

  roles: Role[] = [];
  permissions: Permission[] = [];
  groupedPermissions: any;
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
        this.filterPermissions(permissions);
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

  assignAllPermissions(event: Event) {
    const target = (event.target as HTMLInputElement)!;
    if (target.checked) {
      this.spinner.show()

      const unassignedPermissions = this.permissions
        .filter(permission => !permission.isAssigned)
        .map(permission => permission.id);

      this.authorizationService
        .assignAllPermissionToRole(unassignedPermissions, this.selectedRole!.id)
        .subscribe(response => {
          this.permissions.forEach(permission => {
            permission.isAssigned = true
          });
          this.spinner.hide()

        })
    } else {
      this.spinner.show()

      const allPermissions = this.permissions.map(permission => permission.id);

      this.authorizationService
        .revokeAllPermissionToRole(allPermissions, this.selectedRole!.id)
        .subscribe(response => {
          this.permissions.forEach(permission => {
            permission.isAssigned = false;
          });
          this.spinner.hide()
        })
    }
  }

  isAllPermissionAssigned() {
    const assignedPermissionsLength = this.permissions
      .filter(permission => permission.isAssigned).length;
    const allPermissionsLength = this.permissions.length;

    return assignedPermissionsLength === allPermissionsLength;
  }

  filterPermissions(permissions: Permission[]) {
    this.groupedPermissions = _.groupBy(permissions, "groupName");
  }
}
