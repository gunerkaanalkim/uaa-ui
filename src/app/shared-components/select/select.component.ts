import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SelectDatasource} from "../../store/model";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() label: String = "";
  @Input() datasource : SelectDatasource[] = [];
  @Output() onSelect = new EventEmitter();

  _onSelect(event: any) {
    this.onSelect.emit(event)
  }
}
