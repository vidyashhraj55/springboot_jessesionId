import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _starting_path: string;
  private _data: any;
  public get data(): any {
    return this._data;
  }
  public set data(value: any) {
    this._data = value;
  }
  public get starting_path(): string {
    return this._starting_path;
  }
  public set starting_path(value: string) {
    this._starting_path = value.substring(value.indexOf("/vie")+"/vie".length);
    console.log("starting path is"+this._starting_path );
  }

  constructor() { 
    console.log("In ProfileService constructor");

  }
}
