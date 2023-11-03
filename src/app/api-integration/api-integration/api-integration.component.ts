import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss'],
})
export class ApiIntegrationComponent {
  getApiData!: any[];
  postApiData!: any[];
  endPoint!: number;

  constructor(private apiData: ApiService) {}

  // get api called

  fetchData() {
    this.apiData.getData(this.endPoint).subscribe((data) => {
      this.getApiData = Array.isArray(data) ? data : [data];
    });
  }
  fetchAllData() {
    this.apiData.getAllData().subscribe((data) => {
      this.getApiData = Array.isArray(data) ? data : [data];
    });
  }
}
