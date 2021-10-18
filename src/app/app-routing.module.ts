import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { FavouritelistComponent } from './favouritelist/favouritelist.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",component: MoviesListComponent
  },
  {
    path:"products",component : ProductsComponent
  },
  {
    path:"details/:id",component: DetailsComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"favouritelist", component :FavouritelistComponent,
    canActivate:[AuthGuard],

  },
  {path:"labone",
  loadChildren :()=>import('./labone/labone.module').then((m)=>m.LaboneModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
