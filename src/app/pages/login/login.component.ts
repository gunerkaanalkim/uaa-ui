import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Store} from "@ngrx/store";
import {setAuthenticationResponse} from "../../store/project.action";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly store: Store,
    private readonly router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  username = new FormControl('',
    [Validators.minLength(5),
      Validators.maxLength(50)]
  );
  password = new FormControl('',
    [Validators.minLength(4),
      Validators.maxLength(50)]
  );

  onLogin() {
    if (!this.formHasError()) {
      this.spinner.show();

      this.authenticationService
        .login(this.username.value!, this.password.value!)
        .subscribe(authenticationResponse => {
          this.store.dispatch(setAuthenticationResponse({authenticationResponse: authenticationResponse}))
          this.router.navigate(['home'])
          this.spinner.hide();
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
