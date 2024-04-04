import {Component, Input} from '@angular/core';
import {PermissionService} from "../../../services/permission.service";
import {Router} from "@angular/router";
import {RealmService} from "../../../services/realm.service";

@Component({
  selector: 'app-realm-delete',
  templateUrl: './realm-delete.component.html',
  styleUrls: ['./realm-delete.component.scss']
})
export class RealmDeleteComponent {
  @Input() selectedRealmId: number = 0;

  constructor(
    private readonly service: RealmService,
    private readonly router: Router
  ) {
  }

  onDelete() {
    this.service
      .destroy(this.selectedRealmId)
      .subscribe(shop => {
        this.router.navigate(['/admin/realm/list', {pageNo: 1}])
        window.location.reload();
      })
  }
}
