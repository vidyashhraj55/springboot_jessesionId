import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import {  HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import 'rxjs/Rx';

import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url; 
  private _url1; 
 
  constructor(  private _urlService : UrlService) {
    console.log("constructing LoginService")
    this._url = this._urlService.absUrl('authenticate');
    this._url1= this._urlService.absUrl('loginRet');

   }

   public login(userName: string, password: string,): Observable<any> {
    const params = new HttpParams().set('userName', userName).set('password', password);
    return this._urlService._http.post(this._url, params);
                   
  }

  public getLoginRet(): Observable<any> {
    
    const httpOptions1 = {
      withCredentials: true
    };
  
    return  this._urlService._http.get(this._url1, httpOptions1)
    .map((response: Response) => {
      console.log(response.json());
      return response.json();
    });;
  
                   
  }

  

  

}
