import {HeroesComponent}      from "./heroes.component";
import {DashboardComponent}   from "./dashboard.component";
import {HeroDetailComponent}  from "./hero-detail.component";
import {Routes}               from "@angular/router";

export const ROUTES: Routes = [

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }

]
