/**
 * 组件是 Angular 应用的基本构造块。每个组件都会通过与它相关的模板来控制屏幕上的一小块（视图）。
 * **/
//umd打包后产生的Component引入
import { Component , OnInit } from '@angular/core';


import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

//装饰器函数Component来描述一个页面的属性
@Component({
    moduleId: module.id, //必须
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})

//每个 Angular 应用都至少有一个组件： 根组件 ，这里名叫 AppComponent
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];     //创建一个公共属性，用来暴露这些英雄，以供提供绑定,和javascript一样，我们并不需要明确定义 heroes 属性的数据类型， TypeScript 能从 HEROES 数组中推断出来。
    selectedHero: Hero;

    //构造函数自己什么也不用做，它在参数中定义了一个私有的 heroService 属性，并把它标记为注入 HeroService 的靶点。
    constructor(
        private router: Router,
        private heroService: HeroService
    ) { }

    ngOnInit(): void{
        this.getHeroes();  //钩子函数初始化
    }

    getHeroes(): void{
        this.heroService.getHeroes().then(heros => this.heroes = heros);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void{
        this.router.navigate(['/detail',this.selectedHero.id]);
    }
}



