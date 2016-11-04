/**
 * ����� Angular Ӧ�õĻ�������顣ÿ���������ͨ��������ص�ģ����������Ļ�ϵ�һС�飨��ͼ����
 * **/
//umd����������Component����
import { Component } from '@angular/core';

//����һ��Hero��
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

//ÿ�� Angular Ӧ�ö�������һ������� ����� ���������� AppComponent
export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}


