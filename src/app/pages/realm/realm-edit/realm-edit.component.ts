import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {RealmService} from "../../../services/realm.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-realm-edit',
  templateUrl: './realm-edit.component.html',
  styleUrls: ['./realm-edit.component.scss']
})
export class RealmEditComponent {
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
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
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

  ngOnInit() {
    this.activatedRoute.params.subscribe(({realmId}) => {
      this.service
        .getById(realmId)
        .subscribe((realm) => {
          this.permissionId = realm.id;
          this.realmName.setValue(realm.name!);
          this.realmDescription.setValue(realm.description!);
          this.realmCode.setValue(realm.code!);
        })
    })
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
