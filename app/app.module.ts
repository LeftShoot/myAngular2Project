/**
 * 此文件为应用的入口点
 * **/

import { NgModule } from '@angular/core';  //umd打包后产生的NgModule引入
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { } //每个 Angular 应用都至少有一个模块： 根模块 ，在这里它叫做 AppModule