import {Component, OnInit} from '@angular/core';
import {HttpError, UserDetails} from "../../store/model";
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
  userDetails!: UserDetails;
  httpError: HttpError | null = null;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly authenticationService:AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.whoAmI();
    this.selectUserDetails();
    this.selectHttpError();
  }

  whoAmI() {
    this.authenticationService.whoAmI();
  }

  logout() {
    this.store.dispatch(LOGOUT());
    this.router.navigate(['/login']);
  }

  private selectUserDetails() {
    this.store
      .select(selectUserDetails)
      .subscribe(userDetails => {
      this.userDetails = userDetails;
    })
  }

  private selectHttpError() {
    this.store
      .select(selectHttpError)
      .subscribe(httpError=>{
        this.httpError = httpError;
      })
  }
}
