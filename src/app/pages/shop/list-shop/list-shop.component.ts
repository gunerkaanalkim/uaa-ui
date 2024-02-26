import {Component, Input} from '@angular/core';
import {Shop} from "../../../store/model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.scss']
})
export class ListShopComponent {
  @Input() shops!: Shop[];
  selectedShopId: number = 0;

  constructor(
    private readonly router: Router
  ) {
  }

  onDelete(shopId: number) {
    this.selectedShopId = shopId;
  }

  navigateToProvider(shopID: number) {
    this.router.navigate(['provider', {shopID: shopID}]);
  }
}
