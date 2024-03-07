import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IntegrationService} from "../../../services/integration.service";
import {Brand} from "../../../store/model";
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
  brands: Brand[] = [];

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

  getProductsByBrand(brandId: number) {
    this.brandId = brandId;
    this.router.navigate(['brand/detail', {providerAlias: this.providerAlias, brandId: this.brandId, page: 1}])
  }
}
