import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Store} from "@ngrx/store";
import {setUserInfo} from "../../store/project.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly store: Store,
    private readonly router: Router
  ) {
    this.authenticationService = authenticationService;
  }

  username = new FormControl('kaanalkim', [Validators.minLength(5), Validators.maxLength(50)]);
  password = new FormControl('1234', [Validators.minLength(8), Validators.maxLength(50)]);

  onLogin() {
    if (!this.formHasError()) {
      this.authenticationService
        .login(this.username.value!, this.password.value!)
        .subscribe(response => {
          this.store.dispatch(setUserInfo({userDetails: response}))
          this.router.navigate(['home'])
        })
    }
  }

  usernameHasError() {
    return this.username.invalid && (this.username.dirty || this.username.touched)
  }

  passwordHasError() {
    return this.password.invalid && (this.password.dirty || this.password.touched)
  }

  formHasError() {
    return this.usernameHasError() || this.passwordHasError();
  }
}
