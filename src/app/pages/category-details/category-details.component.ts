import {Component} from '@angular/core';
import {ProductResponse} from "../../store/model";
import {ActivatedRoute, Router} from "@angular/router";
import {IntegrationService} from "../../services/integration.service";
import {Store} from "@ngrx/store";
import {setLoaderVisible} from "../../store/project.action";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent {
  providerAlias: string = '';
  page: number = 1;
  categoryId!: number;
  productResponse: ProductResponse | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly integrationService: IntegrationService,
    private readonly store: Store
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.providerAlias = params['providerAlias'];
      this.page = params['page'];
      this.categoryId = params['categoryId'];

      this.getProductsByBrand(this.categoryId);
    });
  }

  getProductsByBrand(brandId: number) {
    this.store.dispatch(setLoaderVisible({isLoaderVisible: true}))

    this.integrationService
      .getProductsByCategory(this.providerAlias, brandId, this.page)
      .subscribe(productResponse => {
        this.productResponse = productResponse;
        this.store.dispatch(setLoaderVisible({isLoaderVisible: false}))
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['category/detail', {providerAlias: this.providerAlias, categoryId: this.categoryId, page: page}])
  }
}
