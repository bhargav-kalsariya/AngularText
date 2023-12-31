import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.scss'],
})
export class ApiIntegrationComponent implements OnInit {
  getApiData: any[] = [];
  postApiData: any[] = [];
  endPoint!: number;
  postForm!: FormGroup;
  submitted = false;

  constructor(
    private apiData: ApiService,
    private fb: FormBuilder,
    private toast: ToastService
  ) {}

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
      id: [0],
      userId: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  // patch Api process

  updateData(data: any) {
    this.postForm.setValue(data);
  }

  // delete Api Process

  deleteData(dataId: any) {
    this.apiData.deleteData(dataId).subscribe(() => {
      this.postApiData = this.postApiData.filter((data) => data.id !== dataId);
      this.toast.showSuccess('Data Delete successfully', 'Success');
    });
  }

  // submit form

  onSubmitHandle() {
    this.submitted = true;

    if (this.postForm.valid) {
      const formData = this.postForm.value;

      // if id present means data is already exist

      if (formData.id) {
        this.apiData.patchData(formData.id, formData).subscribe((data) => {
          console.log('updated successfully', data);
          const index = this.postApiData.findIndex(
            (item) => item.id === data.id
          );
          if (index !== -1) {
            this.postApiData[index] = data;
          }
          this.toast.showSuccess('Data updated successfully', 'Success');
        });
        // otherwise create new data
      } else {
        this.apiData.postData(formData).subscribe((data) => {
          this.toast.showSuccess('Data posted successfully', 'right');
          this.postApiData = Array.isArray(data) ? data : [data];
          console.log('posted successfully', data);
        });
      }
      this.postForm.reset();
      this.submitted = false;
    } else {
      alert('you are doing wrong with this form.');
    }
  }
}
