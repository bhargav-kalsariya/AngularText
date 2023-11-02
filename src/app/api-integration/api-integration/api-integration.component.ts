import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss'],
})
export class ApiIntegrationComponent implements OnInit {
  getApiData: any;
  endPoint!: number;

  constructor(private apiData: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }
  // fetchData() {
  //   if (this.endPoint) {
  //     this.apiData.getData(this.endPoint).subscribe((data) => {
  //       if (Array.isArray(data)) {
  //         this.getApiData = data;
  //       } else {
  //         this.getApiData = [data];
  //       }
  //     });
  //   } else {
  //     this.fetchAllData();
  //   }
  // }
  // fetchAllData() {
  //   this.apiData.getAllData().subscribe((data) => {
  //     if (Array.isArray(data)) {
  //       this.getApiData = data;
  //     } else {
  //       this.getApiData = [data];
  //     }
  //   });
  // }
  fetchData() {
    const apiCall = this.endPoint
      ? this.apiData.getData(this.endPoint)
      : this.apiData.getAllData();

    apiCall.subscribe((data) => {
      if (Array.isArray(data)) {
        this.getApiData = data;
      } else {
        this.getApiData = [data];
      }
    });
  }
}
