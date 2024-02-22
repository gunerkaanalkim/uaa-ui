import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {setSingleShop, setUserInfo} from "../../../store/project.action";
import {ShopService} from "../../../services/shop.service";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.scss']
})
export class NewShopComponent {
  shopTitle = new FormControl('', [Validators.minLength(5), Validators.maxLength(200)]);
  shopDescription = new FormControl('', [Validators.minLength(5), Validators.maxLength(200)]);
  etsyAccountID = new FormControl('', [Validators.minLength(5), Validators.maxLength(200)]);

  constructor(
    private readonly shopService: ShopService,
    private readonly store: Store,
    private readonly router: Router
  ) {
  }

  onLogin() {
    if (!this.formHasError()) {
      this.shopService
        .create({
          title:this.shopTitle.value!,
          description:this.shopDescription.value!,
          etsyAccountId: this.etsyAccountID.value!,
          id: 0
        })
        .subscribe(shop => {
          this.store.dispatch(setSingleShop({shop: shop}))
          this.router.navigate(['home'])
        })
    }
  }

  titleHasError() {
    return this.shopTitle.invalid && (this.shopTitle.dirty || this.shopTitle.touched)
  }

  descriptionHasError() {
    return this.shopDescription.invalid && (this.shopDescription.dirty || this.shopDescription.touched)
  }

  etsyAccountIDHasError() {
    return this.etsyAccountID.invalid && (this.etsyAccountID.dirty || this.etsyAccountID.touched)
  }

  formHasError() {
    return this.titleHasError() || this.descriptionHasError() || this.etsyAccountIDHasError();
  }
}
