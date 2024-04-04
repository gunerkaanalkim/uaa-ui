import {Component} from '@angular/core';
import {Permission} from "../../../store/model";
import {ActivatedRoute, Router} from "@angular/router";
import {PermissionService} from "../../../services/permission.service";

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss']
})
export class PermissionListComponent {
  permissions: Permission[] = [];
  pageable: any;
  page: number = 1;
  selectedPermissionId: number = 1;

  constructor(
    private readonly permissionService: PermissionService,
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params =>  {
      this.page = params['pageNo'];

      this.getAllUser(this.page);
    });
  }

  getAllUser(pageNo: number) {
    this.permissionService
      .getAll(pageNo)
      .subscribe(permissions => {
        this.permissions = permissions.content;
        this.pageable = {
          currentPage: permissions.pageable.pageNumber,
          lastPage: permissions.totalPages,
          perPage: permissions.pageable.pageSize,
          total: permissions.totalElements
        }
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['/admin/permission/list', {pageNo: page}])
  }

  onDelete(permissionId: number) {
    this.selectedPermissionId = permissionId;
  }
}
