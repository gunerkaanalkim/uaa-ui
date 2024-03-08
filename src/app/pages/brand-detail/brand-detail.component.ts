import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IntegrationService} from "../../services/integration.service";
import {Store} from "@ngrx/store";
import {setLoaderVisible} from "../../store/project.action";
import {ProductResponse} from "../../store/model";

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss']
})
export class BrandDetailComponent implements OnInit {
  providerAlias: string = '';
  page: number = 1;
  brandId!: number;
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
      this.brandId = params['brandId'];

        this.getProductsByBrand(this.brandId);
    });
  }

  getProductsByBrand(brandId: number) {
    this.store.dispatch(setLoaderVisible({isLoaderVisible: true}))

    this.integrationService
      .getProductsByBrand(this.providerAlias, brandId, this.page)
      .subscribe(productResponse => {
        this.productResponse = productResponse;
        this.store.dispatch(setLoaderVisible({isLoaderVisible: false}))
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['brand/detail', {providerAlias: this.providerAlias, brandId: this.brandId, page: page}])
  }
}
