import {Component, Input} from '@angular/core';
import {Product, ProductImage} from "../../store/model";
import {IntegrationService} from "../../services/integration.service";

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
    private readonly integrationService: IntegrationService
  ) {
  }

  onImagesOpen(productId: number) {
      this.productImages =  this.products
        .filter(product=>product.productId === productId)[0]
        .images;
  }

  addToProductDB(productId: number) {
    this.integrationService
      .addToProductDb(this.providerAlias, productId)
      .subscribe(response=>{
        console.log(response);
      })
  }
}
