import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShopService} from "../../../services/shop.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.scss']
})
export class EditShopComponent implements OnInit {
  shopTitle = new FormControl('', [Validators.minLength(5), Validators.maxLength(200)]);
  shopDescription = new FormControl('', [Validators.minLength(5), Validators.maxLength(200)]);
  etsyAccountID = new FormControl('', [Validators.minLength(5), Validators.maxLength(200)]);

  shopId!: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly shopService: ShopService,
    private readonly router: Router
  ) {
  }

  onEdit() {
    if (!this.formHasError()) {
      this.shopService
        .edit({
          title: this.shopTitle.value!,
          description: this.shopDescription.value!,
          etsyAccountId: this.etsyAccountID.value!,
          id: this.shopId
        })
        .subscribe(shop => {
          this.router.navigate(['home'])
        })
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({shopId}) => {
      this.shopService
        .getById(shopId)
        .subscribe((shop) => {
          this.shopId = shop.id;
          this.shopTitle.setValue(shop.title);
          this.shopDescription.setValue(shop.description);
          this.etsyAccountID.setValue(shop.etsyAccountId);
        })
    })
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
