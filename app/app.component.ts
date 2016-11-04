/**
 * 组件是 Angular 应用的基本构造块。每个组件都会通过与它相关的模板来控制屏幕上的一小块（视图）。
 * **/
//umd打包后产生的Component引入
import { Component } from '@angular/core';

//创建一个Hero类
export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `
})

//每个 Angular 应用都至少有一个组件： 根组件 ，这里名叫 AppComponent
export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}


