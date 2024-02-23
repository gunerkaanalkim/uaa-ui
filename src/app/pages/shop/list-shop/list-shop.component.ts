import {Component, Input} from '@angular/core';
import {Shop} from "../../../store/model";

@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.scss']
})
export class ListShopComponent {
  @Input() shops!: Shop[];
  selectedShopId: number = 0;

  onDelete(shopId: number) {
    this.selectedShopId = shopId;
  }
}
