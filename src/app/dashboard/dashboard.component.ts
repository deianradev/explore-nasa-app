import { Component, OnInit } from '@angular/core';
//import * as Chartist from 'chartist';
import { NasaService } from '../services/nasa.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sol: number;
  nasaPhotos: any;
  autorenew: boolean = false;
  currentPage: number = 1;

  constructor(private nasaService: NasaService) { }

  ngOnInit() {

  }

  getPhotosBySol(sol) {    
    this.toggleAutorenew();
    this.resetPhotosModel();
    this.nasaService.getPhotosByMartianSol(sol, this.currentPage.toString()).subscribe(data => {
      data = data.json()
      this.nasaPhotos = data.photos
      this.toggleAutorenew();
    })
  }

  resetPhotosModel(): void {
    this.nasaPhotos = [];
  }

  toggleAutorenew() {
    this.autorenew = !this.autorenew;
  }
  getNext(sol): void {    
    this.currentPage++;
    console.log('next', this.currentPage)
    this.getPhotosBySol(sol);
  }

  getPrevious(sol): void {
    this.currentPage--;
    console.log('prev', this.currentPage)
    this.getPhotosBySol(sol);
  }

  isCurrentPageOne(): boolean {
    return this.currentPage <= 1 ? true : false;

  }
}
