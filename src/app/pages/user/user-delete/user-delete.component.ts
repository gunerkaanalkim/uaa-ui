import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent {
  @Input() selectedUserId: number = 0;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {
  }

  onDelete() {
    this.userService
      .destroy(this.selectedUserId)
      .subscribe(shop => {
        this.router.navigate(['/admin/user/list', {pageNo: 1}])
        window.location.reload();
      })
  }
}
