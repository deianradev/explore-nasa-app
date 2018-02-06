import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ApodComponent } from './apod/apod.component';
import { TableListComponent } from './table-list/table-list.component';

import {NasaService} from './services/nasa.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApodComponent,
    TableListComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
RouterModule,
    AppRoutingModule
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
