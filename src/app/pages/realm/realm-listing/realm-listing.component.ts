import {Component} from '@angular/core';
import {Realm} from "../../../store/model";
import {ActivatedRoute, Router} from "@angular/router";
import {RealmService} from "../../../services/realm.service";

@Component({
  selector: 'app-realm-listing',
  templateUrl: './realm-listing.component.html',
  styleUrls: ['./realm-listing.component.scss']
})
export class RealmListingComponent {
  realms: Realm[] = [];
  pageable: any;
  page: number = 1;
  selectedRealmId: number = 1;

  constructor(
    private readonly realmService: RealmService,
    private readonly router: Router,
    private readonly activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params =>  {
      this.page = params['pageNo'];

      this.getAllRealms(this.page);
    });
  }

  getAllRealms(pageNo: number) {
    this.realmService
      .getAll(pageNo)
      .subscribe(realms => {
        this.realms = realms.content;
        this.pageable = {
          currentPage: realms.pageable.pageNumber,
          lastPage: realms.totalPages,
          perPage: realms.pageable.pageSize,
          total: realms.totalElements
        }
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['/admin/realm/list', {pageNo: page}])
  }

  onDelete(realmId: number) {
    this.selectedRealmId = realmId;
  }

}
