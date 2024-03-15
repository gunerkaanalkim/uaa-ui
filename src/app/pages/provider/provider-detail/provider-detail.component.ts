import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IntegrationService} from "../../../services/integration.service";
import {Brand, Category} from "../../../store/model";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.scss']
})
export class ProviderDetailComponent implements OnInit {
  providerAlias: string = '';
  brandId: number | null = null;
  categoryId: number | null = null;
  brands: Brand[] = [];
  categories: Category[] = [];

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

      this.getAllBrands(this.providerAlias);
      this.getAllCategories(this.providerAlias);
    });
  }

  getAllBrands(providerAlias: string) {
    this.spinner.show();


    this.integrationService
      .getAllBrands(providerAlias)
      .subscribe(brands => {
        this.brands = brands;

        this.spinner.hide();

      })
  }

  getAllCategories(providerAlias: string) {

    this.integrationService
      .getAllCategories(providerAlias)
      .subscribe(categories => {
        this.categories = categories;

      })
  }

  getProductsByBrand(brandId: number) {
    this.brandId = brandId;
    this.router.navigate(['brand/detail', {providerAlias: this.providerAlias, brandId: this.brandId, page: 1}])
  }

  getProductsByCategory(categoryId: number) {
    this.categoryId = categoryId;
    this.router.navigate(['category/detail', {providerAlias: this.providerAlias, categoryId: this.categoryId, page: 1}])
  }
}
