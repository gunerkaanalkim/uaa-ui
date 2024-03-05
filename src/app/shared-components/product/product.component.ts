import {Component, Input} from '@angular/core';
import {Product} from "../../store/model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() products: Product[] = [];
}
