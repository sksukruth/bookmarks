import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from './services/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

 constructor(private router:Router, public apiService: RestApiService){}
  ngOnInit(): void {
    this.apiService.loadData();
  }
  public goToPage(pageName:string):void{
    this.router.navigate([pageName],{replaceUrl:true});
  }
}
