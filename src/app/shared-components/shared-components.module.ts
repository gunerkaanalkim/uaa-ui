import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {BrandComponent} from './brand/brand.component';
import {ProductComponent} from './product/product.component';
import { PagerComponent } from './pager/pager.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
    declarations: [
        HeaderComponent,
        BrandComponent,
        ProductComponent,
        PagerComponent,
        LoaderComponent,
    ],
  exports: [
    HeaderComponent,
    BrandComponent,
    ProductComponent,
    PagerComponent,
    LoaderComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedComponentsModule { }
