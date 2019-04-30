import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { Cookie } from 'ng2-cookies';
import { UrlService } from './url.service';
import { LoginService } from './login.service';



@Component({
  selector: 'smpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public href: string = "";
  public href1: string = "";
  title = 'smpl';

  constructor(private router: Router, private _profile: ProfileService
    , private _urlService: UrlService,
    private loginService: LoginService,) {
console.log("In AppComponent constructor");
  }

  ngOnInit() {
    this.href = this.router.url;
    this.href1 = window.location.href;
    console.log("starting url is "+this.href);
    console.log("starting url is "+this.href1);
    console.log("starting url is "+this.router.config);
    this._profile.starting_path=this.href1;


    let use="/ng-login";

    const jsessionId=Cookie.get("jsid");
    console.log("got jsessionId="+jsessionId);

    this.loginService.getLoginRet().subscribe(response => {
      console.log("got response");
      this._profile.data=response;
      if(this._profile.starting_path.length>0 && ("/ng-login"!=this._profile.starting_path)) {
        use=this._profile.starting_path;
        console.log("use2= "+use);
      }
      else{
        //later use rioles to find this sensibk
       
        use="/ng-welcome";
        console.log("use3= "+use);
      }
     
    }
      ,
       error => { //do nothing will go to login
        console.log("error"+JSON.stringify(error));
      }
       ,
        () => {//do nothing
          this.router.navigateByUrl(use);
        }
      );

 
      
     
    }
    

    
  
    
}

