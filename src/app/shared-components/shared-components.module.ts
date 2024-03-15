import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {BrandComponent} from './brand/brand.component';
import {ProductComponent} from './product/product.component';
import {PagerComponent} from './pager/pager.component';
import {ProductImagesComponent} from './product-images/product-images.component';
import {ProductDetailsTableComponent} from './product-details-table/product-details-table.component';
import {CategoryComponent} from './category/category.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    BrandComponent,
    ProductComponent,
    PagerComponent,
    ProductImagesComponent,
    ProductDetailsTableComponent,
    CategoryComponent,
  ],
  exports: [
    HeaderComponent,
    BrandComponent,
    ProductComponent,
    PagerComponent,
    ProductImagesComponent,
    ProductDetailsTableComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SharedComponentsModule { }
