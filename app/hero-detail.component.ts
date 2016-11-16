import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls:[ 'hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void{
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; //英雄的 id 是数字，而路由参数的值 总是字符串 。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
            this.heroService.getHero(id)
              .then(hero => this.hero = hero);
        })
    }

    goBack(): void{
        this.location.back();
    }

}