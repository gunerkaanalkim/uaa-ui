import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RoleService} from "../../../services/role.service";

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent {
  roleName = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );

  roleCode = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );

  roleId!: number;

  constructor(
    private readonly service: RoleService,
    private readonly router: Router
  ) {
  }

  onEdit() {
    if (!this.formHasError()) {
      this.service
        .create({
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
