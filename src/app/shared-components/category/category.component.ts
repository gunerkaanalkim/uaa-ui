import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../store/model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() categories: Category[] = [];
  @Output() onClick = new EventEmitter();

  _getProducts(categoryId: number) {
    this.onClick.emit(categoryId);
  }
}
