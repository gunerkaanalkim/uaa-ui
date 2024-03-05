import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {BrandComponent} from './brand/brand.component';
import {ProductComponent} from './product/product.component';


@NgModule({
    declarations: [
        HeaderComponent,
        BrandComponent,
        ProductComponent
    ],
  exports: [
    HeaderComponent,
    BrandComponent,
    ProductComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedComponentsModule { }
