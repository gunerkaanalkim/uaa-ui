import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "../../services/authentication.service";
import { HttpError } from "../../store/model";
import { setAuthenticationResponse, setHttpError } from "../../store/project.action";
import { selectHttpError } from "../../store/project.selector";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

  httpError: HttpError | null = null;

  ngOnInit(): void {
    this.selectHttpError();
  }

  onLogin() {
    if (!this.formHasError()) {
      this.spinner.show();

      this.authenticationService
        .login(this.username.value!, this.password.value!)
        .subscribe(authenticationResponse => {
          this.store.dispatch(setAuthenticationResponse({ authenticationResponse: authenticationResponse }))
          this.store.dispatch(setHttpError({ httpError: null }))
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

  selectHttpError() {
    this.store.select(selectHttpError).subscribe(httpError => {
      this.httpError = httpError;
    })
  }
}
