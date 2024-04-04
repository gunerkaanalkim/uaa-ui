import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PermissionService} from "../../../services/permission.service";

@Component({
  selector: 'app-permission-create',
  templateUrl: './permission-create.component.html',
  styleUrls: ['./permission-create.component.scss']
})
export class PermissionCreateComponent {
  permissionName = new FormControl('',
    [Validators.minLength(1), Validators.maxLength(200)]
  );

  permissionDescription = new FormControl('',
    [Validators.minLength(1), Validators.maxLength(200)]
  );

  permissionURL = new FormControl('',
    [Validators.minLength(1), Validators.maxLength(200)]
  );

  permissionController = new FormControl('',
    [Validators.minLength(1), Validators.maxLength(200)]
  );

  permissionGroupName = new FormControl('',
    [Validators.minLength(1), Validators.maxLength(200)]
  );

  permissionId!: number;

  constructor(
    private readonly service: PermissionService,
    private readonly router: Router
  ) {
  }

  onEdit() {
    if (!this.formHasError()) {
      this.service
        .create({
          id: this.permissionId,
          url: this.permissionURL.value!,
          title: this.permissionName.value!,
          description: this.permissionDescription.value!,
          controller: this.permissionController.value!,
          groupName: this.permissionGroupName.value!
        })
        .subscribe(shop => {
          this.router.navigate(['/admin/permission/list', {pageNo: 1}])
        })
    }
  }

  ngOnInit() {
  }

  permissionNameHasError() {
    return this.permissionName.invalid && (this.permissionName.dirty || this.permissionName.touched)
  }

  permissionDescriptionHasError() {
    return this.permissionDescription.invalid && (this.permissionDescription.dirty || this.permissionDescription.touched)
  }

  permissionURLHasError() {
    return this.permissionURL.invalid && (this.permissionURL.dirty || this.permissionURL.touched)
  }

  permissionControllerHasError() {
    return this.permissionController.invalid && (this.permissionController.dirty || this.permissionController.touched)
  }

  permissionGroupNameHasError() {
    return this.permissionGroupName.invalid && (this.permissionGroupName.dirty || this.permissionGroupName.touched)
  }

  formHasError() {
    return this.permissionNameHasError() || this.permissionDescriptionHasError() || this.permissionURLHasError() || this.permissionControllerHasError() || this.permissionGroupNameHasError();
  }
}
