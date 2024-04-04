import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {BrandComponent} from './brand/brand.component';
import {ProductListComponent} from './product-list/product-list.component';
import {PagerComponent} from './pager/pager.component';
import {ProductImagesComponent} from './product-images/product-images.component';
import {ProductDetailsTableComponent} from './product-details-table/product-details-table.component';
import {CategoryComponent} from './category/category.component';
import {RouterLink} from "@angular/router";
import { SearchFieldComponent } from './search-field/search-field.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ManagementMenuComponent } from './management-menu/management-menu.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BrandComponent,
    ProductListComponent,
    PagerComponent,
    ProductImagesComponent,
    ProductDetailsTableComponent,
    CategoryComponent,
    SearchFieldComponent,
    SearchFieldComponent,
    ManagementMenuComponent,
    SelectComponent,
  ],
  exports: [
    HeaderComponent,
    BrandComponent,
    ProductListComponent,
    PagerComponent,
    ProductImagesComponent,
    ProductDetailsTableComponent,
    CategoryComponent,
    SearchFieldComponent,
    SearchFieldComponent,
    ManagementMenuComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ]
})
export class SharedComponentsModule { }
