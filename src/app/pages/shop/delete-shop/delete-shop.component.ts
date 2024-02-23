import {Component, Input} from '@angular/core';
import {ShopService} from "../../../services/shop.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-delete-shop',
  templateUrl: './delete-shop.component.html',
  styleUrls: ['./delete-shop.component.scss']
})
export class DeleteShopComponent {
  @Input() selectedShopId: number = 0;

  constructor(
    private readonly shopService: ShopService,
    private readonly router: Router,
    private readonly store: Store
  ) {
  }

  onDelete() {
    this.shopService
      .destroy(this.selectedShopId)
      .subscribe(shop => {
        this.router.navigate(['home'])
        window.location.reload();
      })
  }
}
