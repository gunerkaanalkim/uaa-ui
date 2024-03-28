import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {RoleService} from "../../../services/role.service";

@Component({
  selector: 'app-role-delete',
  templateUrl: './role-delete.component.html',
  styleUrls: ['./role-delete.component.scss']
})
export class RoleDeleteComponent {
  @Input() selectedRoleId: number = 0;

  constructor(
    private readonly service: RoleService,
    private readonly router: Router
  ) {
  }

  onDelete() {
    this.service
      .destroy(this.selectedRoleId)
      .subscribe(shop => {
        this.router.navigate(['/admin/role/list', {pageNo: 1}])
        window.location.reload();
      })
  }
}
