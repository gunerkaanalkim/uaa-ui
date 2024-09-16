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
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserListingComponent} from './pages/user/user-listing/user-listing.component';
import {UserEditComponent} from './pages/user/user-edit/user-edit.component';
import {UserDeleteComponent} from './pages/user/user-delete/user-delete.component';
import {UserCreateComponent} from './pages/user/user-create/user-create.component';
import {RoleCreateComponent} from './pages/role/role-create/role-create.component';
import {RoleListingComponent} from './pages/role/role-listing/role-listing.component';
import {RoleEditComponent} from './pages/role/role-edit/role-edit.component';
import {RoleDeleteComponent} from './pages/role/role-delete/role-delete.component';
import {PermissionCreateComponent} from './pages/permission/permission-create/permission-create.component';
import {PermissionEditingComponent} from './pages/permission/permission-editing/permission-editing.component';
import {PermissionDeleteComponent} from './pages/permission/permission-delete/permission-delete.component';
import {PermissionListComponent} from './pages/permission/permission-list/permission-list.component';
import {AuthorizationListComponent} from './pages/authorization/authorization-list/authorization-list.component';
import {AssignRoleComponent} from './pages/user/assign-role/assign-role.component';
import {RealmListingComponent} from './pages/realm/realm-listing/realm-listing.component';
import { RealmCreateComponent } from './pages/realm/realm-create/realm-create.component';
import { RealmDeleteComponent } from './pages/realm/realm-delete/realm-delete.component';
import { RealmEditComponent } from './pages/realm/realm-edit/realm-edit.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SplashComponent,
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
    AssignRoleComponent,
    RealmListingComponent,
    RealmCreateComponent,
    RealmDeleteComponent,
    RealmEditComponent,
    ForgotPasswordComponent,
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
