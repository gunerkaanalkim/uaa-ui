import {Component, Input} from '@angular/core';
import {Product} from "../../store/model";

@Component({
  selector: 'app-product-details-table',
  templateUrl: './product-details-table.component.html',
  styleUrls: ['./product-details-table.component.scss']
})
export class ProductDetailsTableComponent {
  @Input() product: Product | null = null;
}
