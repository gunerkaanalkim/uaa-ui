import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(
    private readonly authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.authenticationService.whoAmI().subscribe();
  }


}
