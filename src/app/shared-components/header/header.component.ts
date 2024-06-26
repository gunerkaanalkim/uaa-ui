import {Component, OnInit} from '@angular/core';
import {HttpError} from "../../store/model";
import {Store} from "@ngrx/store";
import {LOGOUT} from "../../store/project.action";
import {Router} from "@angular/router";
import {selectHttpError} from "../../store/project.selector";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  httpError: HttpError | null = null;
  theme: string = '';

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly keycloakService: KeycloakService
  ) {
  }

  ngOnInit(): void {
    this.selectHttpError();

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

  logout() {
    this.store.dispatch(LOGOUT());
    this.keycloakService.logout();
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
}
