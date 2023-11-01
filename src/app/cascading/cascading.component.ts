import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cities, Countries, States } from './dropdownData';

@Component({
  selector: 'app-cascading',
  templateUrl: './cascading.component.html',
  styleUrls: ['./cascading.component.scss'],
})
export class CascadingComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;

  countryData: Array<any> = Countries;
  countryList: Array<any> = [];

  stateData: Array<any> = States;
  stateList: Array<any> = [];

  cityData: Array<any> = Cities;
  cityList: Array<any> = [];

  formData: Array<any> = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      id: [0],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
  }

  onSelectCountry(id: any): void {
    this.registrationForm.controls['state'].reset();
    this.registrationForm.controls['city'].reset();
    const countryId = +id.target.value;
    this.stateList = this.stateData.filter(
      (d: any) => d.countryId == countryId
    );
  }

  onSelectState(id: any): void {
    const stateId = +id.target.value;
    this.registrationForm.controls['city'].reset();
    this.cityList = this.cityData.filter((d1: any) => d1.stateId === stateId);
  }

  editClickHandle(item: any) {
    this.registrationForm.patchValue(item);
  }
  deleteClickHandle(item: any) {
    const index = this.formData.indexOf(item);
    this.formData.splice(index, 1);
  }
  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.valid) {
      let formValue = this.registrationForm.value;
      if (
        formValue.id === 0 ||
        formValue.id === null ||
        formValue.id === undefined
      ) {
        formValue.id = this.formData.length + 1;
        this.formData.push(formValue);
      } else {
        let editItem = this.formData.find((data) => data.id === formValue.id);
        if (editItem) {
          editItem.country = formValue.country;
          editItem.state = formValue.state;
          editItem.city = formValue.city;
        }
      }
      this.registrationForm.reset();
      this.submitted = false;
    }
  }
}
