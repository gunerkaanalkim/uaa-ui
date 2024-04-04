import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RealmService} from "../../../services/realm.service";

@Component({
  selector: 'app-realm-create',
  templateUrl: './realm-create.component.html',
  styleUrls: ['./realm-create.component.scss']
})
export class RealmCreateComponent {
  realmName = new FormControl('',
    [Validators.minLength(1), Validators.maxLength(200)]
  );

  realmCode = new FormControl('',
    [Validators.minLength(1), Validators.maxLength(200)]
  );

  realmDescription = new FormControl('',
    [Validators.minLength(1), Validators.maxLength(200)]
  );

  permissionId!: number;

  constructor(
    private readonly service: RealmService,
    private readonly router: Router
  ) {
  }

  onEdit() {
    if (!this.formHasError()) {
      this.service
        .create({
          id: this.permissionId,
          name: this.realmName.value!,
          code: this.realmCode.value!,
          description: this.realmDescription.value!
        })
        .subscribe(shop => {
          this.router.navigate(['/admin/realm/list', {pageNo: 1}])
        })
    }
  }

  realmNameHasError() {
    return this.realmName.invalid && (this.realmName.dirty || this.realmName.touched)
  }

  realmCodeHasError() {
    return this.realmCode.invalid && (this.realmCode.dirty || this.realmCode.touched)
  }

  realmDescriptionHasError() {
    return this.realmDescription.invalid && (this.realmDescription.dirty || this.realmDescription.touched)
  }

  formHasError() {
    return this.realmNameHasError() || this.realmCodeHasError() || this.realmDescriptionHasError();
  }
}
