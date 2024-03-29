import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedComponentsModule} from "./shared-components/shared-components.module";
import {LoginComponent} from './pages/login/login.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HomeComponent} from './pages/home/home.component';
import {SplashComponent} from './pages/splash/splash.component';
import {StoreModule} from '@ngrx/store';
import {mainReducer} from "./store/project.reducer";
import {metaReducers} from './store/meta-reducers';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {APP_CONFIG} from "./config/tokens";
import {environment} from "../environments/environment";
import {AuthenticationInterceptor} from "./services/authentication.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import {NewShopComponent} from './pages/shop/new-shop/new-shop.component';
import {EditShopComponent} from './pages/shop/edit-shop/edit-shop.component';
import {ListShopComponent} from './pages/shop/list-shop/list-shop.component';
import {DeleteShopComponent} from './pages/shop/delete-shop/delete-shop.component';
import {ListProviderComponent} from './pages/provider/list-provider/list-provider.component';
import {ProviderDetailComponent} from './pages/provider/provider-detail/provider-detail.component';
import {BrandDetailComponent} from './pages/brand-detail/brand-detail.component';
import {CategoryDetailsComponent} from './pages/category-details/category-details.component';
import {ProductDBComponent} from './pages/product-db/product-db.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UserListingComponent } from './pages/user/user-listing/user-listing.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserDeleteComponent } from './pages/user/user-delete/user-delete.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { RoleCreateComponent } from './pages/role/role-create/role-create.component';
import { RoleListingComponent } from './pages/role/role-listing/role-listing.component';
import { RoleEditComponent } from './pages/role/role-edit/role-edit.component';
import { RoleDeleteComponent } from './pages/role/role-delete/role-delete.component';
import { PermissionCreateComponent } from './pages/permission/permission-create/permission-create.component';
import { PermissionEditingComponent } from './pages/permission/permission-editing/permission-editing.component';
import { PermissionDeleteComponent } from './pages/permission/permission-delete/permission-delete.component';
import { PermissionListComponent } from './pages/permission/permission-list/permission-list.component';
import { AuthorizationListComponent } from './pages/authorization/authorization-list/authorization-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SplashComponent,
    NewShopComponent,
    EditShopComponent,
    ListShopComponent,
    DeleteShopComponent,
    ListProviderComponent,
    ProviderDetailComponent,
    BrandDetailComponent,
    CategoryDetailsComponent,
    ProductDBComponent,
    UserListingComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserCreateComponent,
    RoleCreateComponent,
    RoleListingComponent,
    RoleEditComponent,
    RoleDeleteComponent,
    PermissionCreateComponent,
    PermissionEditingComponent,
    PermissionDeleteComponent,
    PermissionListComponent,
    AuthorizationListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedComponentsModule,
    StoreModule.forRoot({state: mainReducer}, {metaReducers, runtimeChecks: {strictStateImmutability: false}}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: environment
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
