import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IntegrationService} from "../../services/integration.service";
import {Store} from "@ngrx/store";
import {ProductResponse} from "../../store/model";
import {NgxSpinnerService} from "ngx-spinner";

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
    private readonly store: Store,
    private spinner: NgxSpinnerService
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
    this.spinner.show();

    this.integrationService
      .getProductsByBrand(this.providerAlias, brandId, this.page)
      .subscribe(productResponse => {
        this.productResponse = productResponse;
        this.spinner.hide();
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['brand/detail', {providerAlias: this.providerAlias, brandId: this.brandId, page: page}])
  }
}
