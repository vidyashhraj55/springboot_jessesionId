import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'smpl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username;
  public password;
  public errorMessage;

  constructor(private router: Router, private loginService: LoginService,private _profile: ProfileService) { }

  ngOnInit() {
  }

  login() {
let hadError=true;
    this.loginService.login(this.username, this.password).subscribe(response => {
      console.log('response='+JSON.stringify(response));
     
    
      this._profile.data=response;
      hadError=false;
     },
     error => {console.log('error='+JSON.stringify(error));this.errorMessage=error.error; }
     ,
      () => {
        // 'onCompleted' callback.
        // No errors, route to new page here
        console.log('in oncomplete and hadError='+hadError);
        if(hadError!=true)
        {
          let use='/ng-welcome';
          if(this._profile.starting_path.length>0 && ('/ng-login'!=this._profile.starting_path))
          {
use=this._profile.starting_path;
          }
          console.log('use='+use);
          Cookie.set('jsid', this._profile.data.jsessionId);
          this.router.navigateByUrl(use);
        }
      }
     );
  }

}
