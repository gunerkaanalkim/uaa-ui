import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-management-menu',
  templateUrl: './management-menu.component.html',
  styleUrls: ['./management-menu.component.scss']
})
export class ManagementMenuComponent {
  @Input() activeElement: string = '';
}
