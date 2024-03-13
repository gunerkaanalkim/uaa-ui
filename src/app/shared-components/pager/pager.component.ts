import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() total: number = 0;
  @Input() currentPage: number = 0;
  @Input() perPage: number = 0;
  @Input() lastPage: number = 0;
  @Output() onSelect = new EventEmitter();
  datasource: number[] = [];

  ngOnInit(): void {
    this.datasource = Array(this.lastPage);
  }

  normalizeIndex(index: number) {
    return ++index;
  }

  _onClick(event: any) {
    this.onSelect.emit(event.target.value);
  }
}
