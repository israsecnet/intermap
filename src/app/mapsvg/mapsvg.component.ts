import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-mapsvg',
  templateUrl: './mapsvg.component.html',
  styleUrls: ['./mapsvg.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class MapsvgComponent implements OnInit{
  CountName = " ";
  CountCode = " ";
  CountCapital = " ";
  CountRegion = " ";
  CountIncome = " ";
  CountLongitude = " ";
  CountLatitude = " ";
  public url = "http://api.worldbank.org/V2/country/";
  countresponse: any;
  constructor ( private http: HttpClient) {}
  ngOnInit(): void {
    
  }
  public mapHover(event:Event) {
    let tmptarget:any =  event.target;
    console.log(tmptarget.id);
    this.getCountryInfo(tmptarget.id);
  }
//TODO Make subscribe wait

  public getCountryInfo(qname:string) {
    this.http.get(this.url+qname+"?format=json", {responseType: 'json'})
      .subscribe(data => {
        this.countresponse = data;
        let CountInfo = [];
        CountInfo[0] = this.countresponse[1][0]['name'];
        CountInfo[1] = this.countresponse[1][0]['capitalCity'];
        CountInfo[2] = this.countresponse[1][0]['region']['value'];
        CountInfo[3] = this.countresponse[1][0]['incomeLevel']['value'];
        CountInfo[4] = this.countresponse[1][0]['iso2Code'];
        CountInfo[5] = this.countresponse[1][0]['longitude'];
        CountInfo[6] = this.countresponse[1][0]['latitude'];
        this.CountName = CountInfo[0];
        this.CountCapital = CountInfo[1];
        this.CountRegion = CountInfo[2];
        this.CountIncome = CountInfo[3];
        this.CountCode = CountInfo[4];
        this.CountLongitude = CountInfo[5];
        this.CountLatitude = CountInfo[6];
      });
  }
}
