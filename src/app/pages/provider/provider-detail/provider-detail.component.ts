import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IntegrationService} from "../../../services/integration.service";
import {Brand, Product} from "../../../store/model";

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.scss']
})
export class ProviderDetailComponent implements OnInit {
  providerAlias: string = '';
  brands: Brand[] = [];
  products: Product[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly integrationService: IntegrationService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.providerAlias = params['providerAlias'];

      this.getAllBrands(this.providerAlias);
    });
  }

  getAllBrands(providerAlias: string) {
    this.integrationService
      .getAllBrands(providerAlias)
      .subscribe(brands => {
        this.brands = brands;
      })
  }

  getProductsByBrand(brandId: number) {
    this.integrationService
      .getProductsByBrand(this.providerAlias, brandId)
      .subscribe(products => {
        this.products = products;
      })
  }

}
