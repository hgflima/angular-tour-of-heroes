import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";

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
  }

]
