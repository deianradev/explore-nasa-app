import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PHOTOS } from '../mock-data/mock-data';

@Injectable()
export class NasaService {

  //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
  apiRoot: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
  data: any;
  getAllPhotos(): Observable<any> {
    return of(PHOTOS);
  }

  getPhotosByMartianSol(sol: string, currentPage: string): Observable<any> {
    let url = `${this.apiRoot}`;
    let search = new URLSearchParams();
    search.set('sol', sol);
    search.set('page', currentPage);
    search.set('api_key', 'EONpGrniR1AIRYU0IyMK3UEnDnyprtXPmFT4Sn6q');
    //search.set('limit', 25);
    return this.http.get(url, { search: search })

    //.subscribe(res => console.log(res.json())); 
  }
  constructor(private http: Http) { }

}
