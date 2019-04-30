import { Injectable, OnInit } from '@angular/core';
import {  HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

import { map } from 'rxjs/operators';
import { UrlService } from './url.service';


@Injectable({
  providedIn: 'root'
})
export class WelcomeServiceService  {
  
  private _url; // = 'http://localhost:8080/hello';
  private _url1; // = 'http://localhost:8080/hello';
  private authenticate_url;
  private _loginRet_url;



  constructor(private _http: HttpClient, private _urlService : UrlService) {
    console.log('welcomeservice constructing');
    this._url = this._urlService.absUrl('hello');
     this._url1 = this._urlService.absUrl('abc');
     this.authenticate_url = this._urlService.absUrl('authenticate');
     this._loginRet_url = this._urlService.absUrl('loginRet');
    console.log('welcomeservice');
   }
   
  public getGreeting(): Observable<any> {
    return this._http.get(this._url);
                   
  }
  
  public postForGreeting(): Observable<any> {
    const params = new HttpParams().set('def', 'wow');
    return this._http.post(this._url1, params);
                   
  }

  

  public login(userName: string, password: string, http: HttpClient ): Observable<any> {
    const params = new HttpParams().set('userName', userName).set('password', password);
    return http.post(this.authenticate_url, params);
                   
  }


  public getLoginRet(http: HttpClient): Observable<any> {
    const httpOptions1 = {
      
      withCredentials: true,

    };
   
    const ret: Observable<any> = http.get(this._loginRet_url, httpOptions1);
   
    return ret;
                   
  }

  public getLoginReta(): Observable<any> {
    const httpOptions1 = {
      withCredentials: true
    };
   
    const ret: Observable<any> = this._http.get(this._loginRet_url, httpOptions1);
   
    return ret;
                   
  }


  
    
}
