import {Component, Input} from '@angular/core';
import {Product, ProductImage} from "../../store/model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() products: Product[] = [];
  productImages: ProductImage[] = [];

  onImagesOpen(productId: number) {
      this.productImages =  this.products
        .filter(product=>product.productId === productId)[0]
        .images;

    console.log(this.productImages)
  }
}
