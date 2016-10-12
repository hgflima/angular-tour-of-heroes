import {HeroesComponent}      from "./heroes.component";
import {DashboardComponent}   from "./dashboard.component";
import {HeroDetailComponent}  from "./hero-detail.component";

export const ROUTES = [

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
