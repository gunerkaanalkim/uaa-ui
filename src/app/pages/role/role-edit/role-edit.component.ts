import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {RoleService} from "../../../services/role.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent {
  roleName = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );

  roleCode = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );

  roleId!: number;

  constructor(
    private readonly service: RoleService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
  }

  onEdit() {
    if (!this.formHasError()) {
      this.service
        .edit({
          id: this.roleId,
          name: this.roleName.value!,
          code: this.roleCode.value!
        })
        .subscribe(shop => {
          this.router.navigate(['/admin/role/list', {pageNo: 1}])
        })
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({userId}) => {
      this.service
        .getById(userId)
        .subscribe((role) => {
          this.roleId = role.id;
          this.roleName.setValue(role.name);
          this.roleCode.setValue(role.code);
        })
    })
  }


  roleNameHasError() {
    return this.roleName.invalid && (this.roleName.dirty || this.roleName.touched)
  }

  roleCodeHasError() {
    return this.roleCode.invalid && (this.roleCode.dirty || this.roleCode.touched)
  }

  formHasError() {
    return this.roleNameHasError() || this.roleCodeHasError();
  }
}
