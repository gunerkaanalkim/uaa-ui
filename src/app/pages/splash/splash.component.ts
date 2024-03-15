import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.authenticationService.whoAmI().subscribe(()=>{
      this.router.navigate(['/home'])
      this.spinner.hide();
    });
  }


}
