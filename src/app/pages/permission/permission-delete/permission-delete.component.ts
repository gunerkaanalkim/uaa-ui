import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {PermissionService} from "../../../services/permission.service";

@Component({
  selector: 'app-permission-delete',
  templateUrl: './permission-delete.component.html',
  styleUrls: ['./permission-delete.component.scss']
})
export class PermissionDeleteComponent {
  @Input() selectedPermissionId: number = 0;

  constructor(
    private readonly service: PermissionService,
    private readonly router: Router
  ) {
  }

  onDelete() {
    this.service
      .destroy(this.selectedPermissionId)
      .subscribe(shop => {
        this.router.navigate(['/admin/permission/list', {pageNo: 1}])
        window.location.reload();
      })
  }
}
