import {Component} from '@angular/core';
import {Role} from "../../../store/model";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleService} from "../../../services/role.service";

@Component({
  selector: 'app-role-listing',
  templateUrl: './role-listing.component.html',
  styleUrls: ['./role-listing.component.scss']
})
export class RoleListingComponent {
  roles: Role[] = [];
  pageable: any;
  page: number = 1;
  selectedRoleId: number = 1;

  constructor(
    private readonly roleService: RoleService,
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
    this.roleService
      .getAll(pageNo)
      .subscribe(roles => {
        this.roles = roles.content;
        this.pageable = {
          currentPage: roles.pageable.pageNumber,
          lastPage: roles.totalPages,
          perPage: roles.pageable.pageSize,
          total: roles.totalElements
        }
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['/admin/role/list', {page: page}])
  }

  onDelete(roleId: number) {
    this.selectedRoleId = roleId;
  }
}
