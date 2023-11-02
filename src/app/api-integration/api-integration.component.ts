import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss']
})
export class ApiIntegrationComponent implements OnInit {

  userData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    debugger;
    this.apiService.getData(1).subscribe((data) => {
      this.userData = data;
    });
  }

}
