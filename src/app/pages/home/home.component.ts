import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectUserDetails} from "../../store/project.selector";
import {UserDetails} from "../../store/model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userDetails: UserDetails = {} as UserDetails;

  constructor(
    private readonly store: Store
  ) {
  }

  ngOnInit(): void {
    this.selectUserDetails();
  }

  private selectUserDetails() {
    this.store.select(selectUserDetails).subscribe(userDetails => {
      this.userDetails = userDetails;
    })
  }
}
