import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {SplashComponent} from "./pages/splash/splash.component";
import {UserListingComponent} from "./pages/user/user-listing/user-listing.component";
import {UserEditComponent} from "./pages/user/user-edit/user-edit.component";
import {UserCreateComponent} from "./pages/user/user-create/user-create.component";
import {RoleCreateComponent} from "./pages/role/role-create/role-create.component";
import {RoleListingComponent} from "./pages/role/role-listing/role-listing.component";
import {RoleEditComponent} from "./pages/role/role-edit/role-edit.component";
import {PermissionListComponent} from "./pages/permission/permission-list/permission-list.component";
import {PermissionEditingComponent} from "./pages/permission/permission-editing/permission-editing.component";
import {PermissionCreateComponent} from "./pages/permission/permission-create/permission-create.component";
import {AuthorizationListComponent} from "./pages/authorization/authorization-list/authorization-list.component";
import {RealmListingComponent} from "./pages/realm/realm-listing/realm-listing.component";
import {RealmEditComponent} from "./pages/realm/realm-edit/realm-edit.component";
import {RealmCreateComponent} from "./pages/realm/realm-create/realm-create.component";

const routes: Routes = [
  {path: '', redirectTo: 'splash', pathMatch: 'full'},
  {path: 'splash', component: SplashComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/user/list', component: UserListingComponent},
  {path: 'admin/user/edit', component: UserEditComponent},
  {path: 'admin/user/create', component: UserCreateComponent},
  {path: 'admin/role/list', component: RoleListingComponent},
  {path: 'admin/role/edit', component: RoleEditComponent},
  {path: 'admin/role/create', component: RoleCreateComponent},
  {path: 'admin/permission/list', component: PermissionListComponent},
  {path: 'admin/permission/edit', component: PermissionEditingComponent},
  {path: 'admin/permission/create', component: PermissionCreateComponent},
  {path: 'admin/realm/list', component: RealmListingComponent},
  {path: 'admin/realm/edit', component: RealmEditComponent},
  {path: 'admin/realm/create', component: RealmCreateComponent},
  {path: 'admin/authorization/list', component: AuthorizationListComponent},
  // {path: 'integration/etsy', component: ProductDBComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
