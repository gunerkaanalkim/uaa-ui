import {Component, OnInit} from '@angular/core';
import {ProductResponse} from "../../store/model";
import {ActivatedRoute, Router} from "@angular/router";
import {IntegrationService} from "../../services/integration.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  providerAlias: string = '';
  page: number = 1;
  categoryId!: number;
  categoryName!: string;
  productResponse: ProductResponse | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly integrationService: IntegrationService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.providerAlias = params['providerAlias'];
      this.page = params['page'];
      this.categoryId = params['categoryId'];
      this.categoryName = params['categoryName'];

      this.getProductsByBrand(this.categoryId);
    });
  }

  getProductsByBrand(brandId: number) {
    this.spinner.show();

    this.integrationService
      .getProductsByCategory(this.providerAlias, brandId, this.page)
      .subscribe(productResponse => {
        this.productResponse = productResponse;
        this.spinner.hide();
      })
  }

  onPageSelect(page: number) {
    this.router.navigate(['category/detail', {providerAlias: this.providerAlias, categoryId: this.categoryId, page: page}])
  }
}
