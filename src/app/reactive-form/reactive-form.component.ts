import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  mainForm!: FormGroup;

  countries = ['Country 1', 'Country 2', 'Country 3'];
  states = ['State 1', 'State 2', 'State 3'];
  cities = ['City 1', 'City 2', 'City 3'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.formBuilder.array([this.createAddress()])
    });
  }

  createAddress() {
    return this.formBuilder.group({
      address1: ['', Validators.required],
      address2: [''],
      landmark: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  get addresses() {
    return this.mainForm.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddress());
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  onSubmit() {
    if (this.mainForm.valid) {
      console.log('Form Data:', this.mainForm.value);
      this.mainForm.reset();
    } else {
      alert('you have to fill all the field')
    }
  }
}