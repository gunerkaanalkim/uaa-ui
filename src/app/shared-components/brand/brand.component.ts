import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Brand} from "../../store/model";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  @Input() brands: Brand[] = [];
  @Output() onClick = new EventEmitter();

  _getProducts(brand: Brand) {
    this.onClick.emit(brand);
  }
}
