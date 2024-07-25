import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {Store} from "@ngrx/store";
import {setAllShops} from "../../store/project.action";
import {Shop} from "../../store/model";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shops: Shop[] = [];

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
