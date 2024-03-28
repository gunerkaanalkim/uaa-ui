import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import * as bcrypt from 'bcryptjs'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
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

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {
  }

  onEdit() {
    if (!this.formHasError()) {
      const passwordHash = bcrypt
        .hashSync(this.password.value!, bcrypt.genSaltSync(10));

      this.userService
        .create({
          username: this.username.value!,
          name: this.name.value!,
          email: this.email.value!,
          surname: this.surname.value!,
          password: passwordHash,
          id: this.userId
        })
        .subscribe(shop => {
          this.router.navigate(['/admin/user/list', {pageNo: 1}])
        })
    }
  }

  ngOnInit() {
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
}
