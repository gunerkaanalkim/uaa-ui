import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IntegrationService} from "../../../services/integration.service";
import {Brand, Category} from "../../../store/model";
import {Store} from "@ngrx/store";
import {setLoaderVisible} from "../../../store/project.action";

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
    private readonly store: Store
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
    this.store.dispatch(setLoaderVisible({isLoaderVisible: true}))
    this.integrationService
      .getAllBrands(providerAlias)
      .subscribe(brands => {
        this.brands = brands;
        this.store.dispatch(setLoaderVisible({isLoaderVisible: false}))
      })
  }

  getAllCategories(providerAlias: string) {
    this.store.dispatch(setLoaderVisible({isLoaderVisible: true}))
    this.integrationService
      .getAllCategories(providerAlias)
      .subscribe(categories => {
        this.categories = categories;
        this.store.dispatch(setLoaderVisible({isLoaderVisible: false}))
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
