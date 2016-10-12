import { Component, OnInit } from '@angular/core';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  template: '<h3>My Dashboard</h3>'
})

export class DashboardComponent implements OnInit {


  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {

  }

  gotoDetail(hero: Hero): void {
  //  let link = ['/detail', hero.id];
    //this.router.navigate(link);
  }

}
