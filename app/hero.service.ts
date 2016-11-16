import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() //当 TypeScript 看到 @Injectable() 装饰器时，就会记下本服务的元数据
export class HeroService{

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero>{
        return this.getHeroes()
          .then(heroes => heroes.find(hero => hero.id === id));
    }
}