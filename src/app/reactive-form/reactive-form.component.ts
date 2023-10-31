import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  mainForm!: FormGroup;

  countries = ['Select a country', 'India', 'China', 'Germany'];
  states: { [key: string]: string[] } = {
    'India': ['Gujarat', 'Maharashtra', 'Delhi'],
    'China': ['Hainan', 'Sichuan', 'Yunnan'],
    'Germany': ['Berlin', 'Bavaria', 'Saxony']
  };
  cities: { [key: string]: string[] } = {
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
    'Delhi': ['New Delhi', 'Noida', 'Gurugram'],
    'Hainan': ['Haikou', 'Sanya', 'Wenchang'],
    'Sichuan': ['Chengdu', 'Chongqing', 'Leshan'],
    'Yunnan': ['Kunming', 'Lijiang', 'Dali'],
    'Berlin': ['Berlin City Center', 'Charlottenburg', 'Prenzlauer Berg'],
    'Bavaria': ['Munich', 'Nuremberg', 'Augsburg'],
    'Saxony': ['Dresden', 'Leipzig', 'Chemnitz']
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      id: ['', [Validators.required]],
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
    }
  }
  triggerErrorMessages() {
    for (const key in this.mainForm.controls) {
      if (this.mainForm.controls[key] instanceof FormGroup) {
        const formGroup = this.mainForm.controls[key] as FormGroup;
        for (const subKey in formGroup.controls) {
          formGroup.controls[subKey].markAsTouched();
        }
      } else {
        this.mainForm.controls[key].markAsTouched();
      }
    }
  }
  onCountryChange(index: number) {
    const addressFormGroup = this.addresses.controls[index] as FormGroup;
    addressFormGroup.get('state')?.reset();
    addressFormGroup.get('city')?.reset();
  }
}
