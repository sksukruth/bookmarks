import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  public respObj;
  constructor(public http:HttpClient){}
  public loadData() {
    return this.http.get('https://localhost:7012/api/Payload');
  }
  public setResponseData(){
    this.respObj=this.loadData();
  }
}
