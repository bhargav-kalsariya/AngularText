import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss'],
})
export class ApiIntegrationComponent implements OnInit {
  getApiData!: any[];
  postApiData!: any[];
  endPoint!: number;
  postForm!: FormGroup;
  submitted = false;

  constructor(private apiData: ApiService, private fb: FormBuilder) {}

  // get api Process

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

  // post Api Process

  ngOnInit(): void {
    this.postForm = this.fb.group({
      id: [0, Validators.required],
      userId: [null, Validators.required],
      title: [null, Validators.required],
      body: [null, Validators.required],
    });
  }
  onSubmitHandle() {
    this.submitted = true;
    if (this.postForm.valid) {
      console.log(this.postForm.value);
      this.submitted = false;
    }
    this.apiData.postData(this.postForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
