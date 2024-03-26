import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../store/model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {
  users: User[] = [];
  pageable: any;
  page: number = 1;
  selectedUserId: number = 1;

  constructor(
    private readonly userService: UserService,
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
    this.userService
      .getAll(pageNo)
      .subscribe(users => {
        this.users = users.content;
        this.pageable = {
          currentPage: users.pageable.pageNumber,
          lastPage: users.totalPages,
          perPage: users.pageable.pageSize,
          total: users.totalElements
        }
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['/admin/user/list', {page: page}])
  }

  onDelete(userId: number) {
    this.selectedUserId = userId;
  }
}
