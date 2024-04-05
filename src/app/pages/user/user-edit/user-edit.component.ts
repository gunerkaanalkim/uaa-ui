import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Realm, SelectDatasource} from "../../../store/model";
import {RealmService} from "../../../services/realm.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  username = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );
  name = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );
  surname = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );
  email = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );

  password = new FormControl('',
    [Validators.minLength(5), Validators.maxLength(200)]
  );

  userId!: number;
  realms: Realm[] = [];
  realmsDatasource: SelectDatasource[] | any[] = [];
  selectedRealm!: Realm;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService,
    private readonly realmService: RealmService,
    private readonly router: Router
  ) {
  }

  onEdit() {
    if (!this.formHasError()) {
      this.userService
        .edit({
          realm: this.selectedRealm,
          username: this.username.value!,
          name: this.name.value!,
          email: this.email.value!,
          surname: this.surname.value!,
          id: this.userId
        })
        .subscribe(shop => {
          this.router.navigate(['/admin/user/list', {pageNo: 1}])
        })
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({userId}) => {
      this.userService
        .getById(userId)
        .subscribe((user) => {
          this.userId = user.id;
          this.username.setValue(user.username);
          this.name.setValue(user.name);
          this.surname.setValue(user.surname);
          this.email.setValue(user.email);

          this.selectedRealm = user.realm;
        })
    })

    this.realmService
      .getAllWithoutPage()
      .subscribe(realms => {
        this.realms = realms;
        this.realmsDatasource = realms.map(realm => {
          return {
            label: realm.name,
            value: realm.id
          }
        });

      })
  }

  usernameHasError() {
    return this.username.invalid && (this.username.dirty || this.username.touched)
  }

  nameHasError() {
    return this.name.invalid && (this.name.dirty || this.name.touched)
  }

  surnameHasError() {
    return this.surname.invalid && (this.surname.dirty || this.surname.touched)
  }

  emailHasError() {
    return this.email.invalid && (this.email.dirty || this.email.touched)
  }

  passwordHasError() {
    return this.password.invalid && (this.password.dirty || this.password.touched)
  }

  formHasError() {
    return this.usernameHasError() || this.nameHasError() || this.surnameHasError() || this.emailHasError();
  }

  onRealmSelect(event: any) {
    this.selectedRealm = this.realms.filter(realm => realm.id === Number(event.target.value))[0];
  }

  protected readonly String = String;
}
