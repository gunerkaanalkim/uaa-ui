import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {UserService} from 'src/app/services/user.service';
import {HttpError} from 'src/app/store/model';
import {setHttpError} from 'src/app/store/project.action';
import {selectHttpError} from 'src/app/store/project.selector';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  httpError: HttpError | null = null;
  isTokenCreated: boolean = false;

  username = new FormControl('',
    [Validators.minLength(5),
      Validators.maxLength(50)]
  );

  constructor(
    private readonly store: Store,
    private readonly userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.selectHttpError();
  }

  usernameHasError() {
    return this.username.invalid && (this.username.dirty || this.username.touched)
  }

  formHasError() {
    return this.usernameHasError();
  }

  onForgotPassword() {
    this.userService
      .forgotPassword(this.username.value!)
      .subscribe(response => {
        this.store.dispatch(setHttpError({httpError: null}));
        this.isTokenCreated = true;
      })
  }

  selectHttpError() {
    this.store.select(selectHttpError).subscribe(httpError => {
      this.httpError = httpError;
    })
  }
}
