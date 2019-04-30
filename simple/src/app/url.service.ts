import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as urlconfig from './../baseurl/base.json'; 

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  


  private _url: string;



  public absUrl(path: string) {
    return this._url + path;
  }



  




  constructor(public _http: HttpClient) {
    
    
    console.log(urlconfig);
    this._url = urlconfig['base'];
    console.log("Got" + this._url);


   }
}
