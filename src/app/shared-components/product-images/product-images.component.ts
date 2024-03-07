import {Component, Input} from '@angular/core';
import {ProductImage} from "../../store/model";

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent {
  @Input() productImages: ProductImage[] = [];

}
