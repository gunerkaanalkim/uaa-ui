import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {PagerComponent} from './pager/pager.component';
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { ManagementMenuComponent } from './management-menu/management-menu.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PagerComponent,
    ManagementMenuComponent,
    SelectComponent,
  ],
  exports: [
    HeaderComponent,
    PagerComponent,
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
