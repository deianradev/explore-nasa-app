import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ApodComponent } from './apod/apod.component';
import { TableListComponent } from './table-list/table-list.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'apod',           component: ApodComponent },
    { path: 'table-list',     component: TableListComponent },        
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
