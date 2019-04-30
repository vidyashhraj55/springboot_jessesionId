import { Component, OnInit } from '@angular/core';
import { WelcomeServiceService } from '../welcome-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'smpl-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public msg;
  public js;

  constructor(private service: WelcomeServiceService, private _http: HttpClient, ) { }

  ngOnInit() {
  }

  greet() {
    this.service.getGreeting().subscribe((data:any) => {this.msg = data["content"];});
    
  }
  
  greet1() {
    this.service.postForGreeting().subscribe((data:any) => {this.msg = data["content"];});
    
  }

  tryGet()
  {
    this.service.getLoginReta().subscribe((data:any) => {console.log("GET="+JSON.stringify(data));});
  }

  tryfetch()
  {
    let h=new Headers();
    h.set('Cookie','jsessionId='+this.js);

    const request = new Request("http://localhost:8080/vie/loginRet", {
      method: 'GET', 
     
      headers: h
  });
 
  h.forEach((key, headerName) => {
    console.log(headerName)
    ;
   console.log(key);
   
  });
  
    fetch(request)
  // .then(resp => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(JSON.stringify(data));
    })
    .catch(error => console.error(error));
  }

  tryfetch1()
  {
   
    fetch('http://localhost:8080/vie/loginRet', {
      credentials: 'include'  
    })
  .then(resp => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(JSON.stringify(data));
    })
    .catch(error => console.error(error));
  }

  tryXhr()
  {
   
    let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/vie/loginRet', true); 
xhr.responseType = 'json';
xhr.withCredentials = true; 
xhr.onload = function()
{
console.log(JSON.stringify(xhr.response));
};

xhr.onerror = function(error)
{
console.log(error);
};

xhr.send(null);
  }

  chain() {
    this.service.login("user1", "p", this._http).subscribe((data:any) =>
     {
       console.log(JSON.stringify(data));
       this.js = data.jsessionId;

       this.service.getLoginRet( this._http).subscribe(response => {
        console.log("got response"+JSON.stringify(response));
      
       
      }
        ,
         error => { 
          console.log("error="+JSON.stringify(error));
        }
         ,
          () => {//do nothing
           console.log("info");
          }
        );
     }
     );

     
    
  }


}
