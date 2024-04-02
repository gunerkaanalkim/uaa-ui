import {Component, Input, OnInit} from '@angular/core';
import {RoleService} from "../../../services/role.service";
import {Role} from "../../../store/model";
import {AuthorizationService} from "../../../services/authorization.service";
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent implements OnInit {
  @Input() selectedUserId: number = 0;
  roles: Role[] = [];
  selectedRoleId: number = 0;
  selectedRoleName: string = "";

  constructor(
    private readonly roleService: RoleService,
    private readonly authorizationService: AuthorizationService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.roleService
      .getAllWithoutPage()
      .subscribe(roles => {
        this.roles = roles;
        this.selectedRoleId = roles[0].id;
      })

    this.activatedRoute.params.subscribe(params => {
      this.selectedUserId = params['selectedUser'];

      if (this.selectedUserId) {
        this.authorizationService
          .getAssignedRoleOfUser(this.selectedUserId)
          .subscribe(roleUser => {
            if (roleUser) {
              this.selectedRoleName = roleUser.role.name;
            }
          })
      }
    });
  }

  onAssignRole() {
    this.spinner.show();

    this.authorizationService
      .revokeRoleToUser(this.selectedUserId, this.selectedRoleId)
      .subscribe(response => {
        this.authorizationService
          .assignRoleToUser(this.selectedUserId, this.selectedRoleId)
          .subscribe(roleUser => {
            this.selectedRoleName = roleUser.role.name;
            this.spinner.hide();
          })
      })
  }

  onSelect(event: any) {
    this.selectedRoleId = event.target.value;
  }
}
