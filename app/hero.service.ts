import { Injectable } from '@angular/core';

import { Hero }       from './hero';
import { HEROES }     from './mock-heroes';

@Injectable()
export class HeroService {

  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  // }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // just to simulate a late call
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

}
