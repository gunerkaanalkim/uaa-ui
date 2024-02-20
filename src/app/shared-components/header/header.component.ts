import {Component, Input} from '@angular/core';
import {UserDetails} from "../../store/model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() userDetails!: UserDetails;
}
