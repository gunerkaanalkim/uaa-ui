import {Component, Input} from '@angular/core';
import {Product, ProductImage} from "../../store/model";
import {IntegrationService} from "../../services/integration.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() products: Product[] = [];
  @Input() providerAlias: string = "";
  productImages: ProductImage[] = [];

  constructor(
    private readonly integrationService: IntegrationService,
    private readonly store: Store
  ) {
  }

  onImagesOpen(productId: number) {
      this.productImages =  this.products
        .filter(product=>product.productId === productId)[0]
        .images;
  }

  addToProductDB(productId: number) {
    ;

    this.integrationService
      .addToProductDb(this.providerAlias, productId)
      .subscribe(productResponse => {
        this.integrationService.saveProductImages(productResponse.productId, productResponse.images).subscribe();
        this.integrationService.saveProductVariants(productResponse.productId, productResponse.variants).subscribe(productVariants => {
          this.integrationService.saveProductVariantOptions(productResponse.productId, this.providerAlias).subscribe();

          ;
        });
      });
  }

}
