import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {SplashComponent} from "./pages/splash/splash.component";
import {NewShopComponent} from "./pages/shop/new-shop/new-shop.component";
import {EditShopComponent} from "./pages/shop/edit-shop/edit-shop.component";

const routes: Routes = [
  {path: '', redirectTo: 'splash', pathMatch: 'full'},
  {path: 'splash', component: SplashComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shop/new', component: NewShopComponent},
  {path: 'shop/edit/:shopId', component: EditShopComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
