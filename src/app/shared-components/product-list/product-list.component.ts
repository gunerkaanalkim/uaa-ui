import {Component, Input} from '@angular/core';
import {Product, ProductImage} from "../../store/model";
import {IntegrationService} from "../../services/integration.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() providerAlias: string = "";
  @Input() header: string = "";
  @Input() shopId: number = 0;
  productImages: ProductImage[] = [];

  constructor(
    private readonly integrationService: IntegrationService,
    private readonly productService: ProductService,
    private spinner: NgxSpinnerService
  ) {
  }

  onImagesOpen(productId: number) {
      this.productImages =  this.products
        .filter(product=>product.productId === productId)[0]
        .images;
  }

  addToProductDB(productId: number) {
    this.spinner.show()
    this.integrationService
      .addToProductDb(this.providerAlias, productId, this.shopId)
      .subscribe(productResponse => {
        this.integrationService.saveProductImages(productResponse.productId, productResponse.images).subscribe();
        this.integrationService.saveProductVariants(productResponse.productId, productResponse.variants).subscribe(productVariants => {
          this.integrationService.saveProductVariantOptions(productResponse.productId, this.providerAlias).subscribe();
          this.spinner.hide()
        });
      });
  }

  removeFromProductDB(productId: number) {
    this.spinner.show()

    this.productService
      .destroy(productId)
      .subscribe(response=>{
        this.spinner.hide();
      })
  }

}
