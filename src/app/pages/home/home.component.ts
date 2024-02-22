import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {Store} from "@ngrx/store";
import {setAllShops} from "../../store/project.action";
import {Shop} from "../../store/model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shops: Shop[] = [];

  constructor(
    private readonly shopService: ShopService,
    private readonly store: Store
  ) {
  }

  ngOnInit(): void {
    this.getAllShops();
  }

  getAllShops() {
    this.shopService
      .getAll()
      .subscribe(shops => {
        this.store.dispatch(setAllShops({shops: shops}))
        this.shops = shops;
      })
  }
}
