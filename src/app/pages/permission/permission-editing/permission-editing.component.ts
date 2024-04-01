import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {PermissionService} from "../../../services/permission.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-permission-editing',
  templateUrl: './permission-editing.component.html',
  styleUrls: ['./permission-editing.component.scss']
})
export class PermissionEditingComponent {
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

  permissionId!: number;

  constructor(
    private readonly service: PermissionService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
  }

  onEdit() {
    if (!this.formHasError()) {
      this.service
        .edit({
          id: this.permissionId,
          url: this.permissionURL.value!,
          title: this.permissionName.value!,
          description: this.permissionDescription.value!,
          controller: this.permissionController.value!
        })
        .subscribe(shop => {
          this.router.navigate(['/admin/permission/list', {pageNo: 1}])
        })
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({permissionId}) => {
      this.service
        .getById(permissionId)
        .subscribe((permission) => {
          this.permissionId = permission.id;
          this.permissionName.setValue(permission.title);
          this.permissionDescription.setValue(permission.description);
          this.permissionURL.setValue(permission.url);
          this.permissionController.setValue(permission.controller);
        })
    })
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

  formHasError() {
    return this.permissionNameHasError() || this.permissionDescriptionHasError();
  }
}
