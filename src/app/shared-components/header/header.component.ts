import {Component, OnInit} from '@angular/core';
import {HttpError, AuthenticationResponse, UserInfo} from "../../store/model";
import {Store} from "@ngrx/store";
import {LOGOUT} from "../../store/project.action";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {selectHttpError, selectUserDetails} from "../../store/project.selector";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  httpError: HttpError | null = null;
  theme: string = '';
  userInfo: UserInfo = {} as UserInfo;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly authenticationService:AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.whoAmI();
    this.selectHttpError();
    this.selectUserDetails();

    let savedTheme = localStorage.getItem('theme')!;

    if(!savedTheme) {
      savedTheme = 'light';
    }

    this.theme = savedTheme;

    if ('dark' === savedTheme) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  whoAmI() {
    this.authenticationService.whoAmI();
  }

  logout() {
    this.store.dispatch(LOGOUT());
    this.router.navigate(['/login']);
  }

  private selectHttpError() {
    this.store
      .select(selectHttpError)
      .subscribe(httpError=>{
        this.httpError = httpError;
      })
  }

  setDarkTheme() {
    //@ts-ignore
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    localStorage.setItem('theme', "dark");
    this.theme = 'dark';
  }

  setLightTheme() {
    //@ts-ignore
    document.querySelector("html").setAttribute("data-bs-theme", "light")
    localStorage.setItem('theme', "light");
    this.theme = 'light';
  }

  selectUserDetails() {
    this.store.select(selectUserDetails)
      .subscribe(userInfo=>{
        this.userInfo = userInfo;
      })
  }
}
