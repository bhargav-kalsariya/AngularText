import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss'],
})
export class ApiIntegrationComponent implements OnInit {
  getApiData!: any[];
  postApiData!: any[];
  endPoint!: number;

  constructor(private apiData: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
    this.postData();
  }

  // get api called

  fetchData() {
    const apiCall = this.endPoint
      ? this.apiData.getData(this.endPoint)
      : this.apiData.getAllData();

    apiCall.subscribe((data) => {
      this.getApiData = Array.isArray(data) ? data : [data];
    });
  }

  // post api called

  postData() {
    const postData = {
      title: 'New Post',
      body: 'This is the content of the new post',
      userId: 101,
      id: 101,
    };

    this.apiData.postData(postData).subscribe((res) => {
      this.postApiData = Array.isArray(res) ? res : [res];
      console.log('new record created : ', res);
    });
  }

  // get approach 1
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
  // post approach 1
  // if (Array.isArray(res)) {
  //   this.postApiData = res;
  //   console.log('new record created : ', res);
  // } else {
  //   this.postApiData = [res];
  //   console.log('new record created : ', res);
  // }
}
