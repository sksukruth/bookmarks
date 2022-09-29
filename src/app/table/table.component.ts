import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public responseObj;
  constructor(public http:HttpClient){}
  ngOnInit(): void {
    this.loadData().subscribe((resp)=>{
      this.responseObj = resp;
      console.log(resp);
    });
  }
  public loadData() {
    return this.http.get('https://localhost:7012/api/Payload');
  }
}
