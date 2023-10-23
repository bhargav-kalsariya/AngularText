import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {
  formData: any = {
    name: '',
    id: '',
    age: '',
    address: {
      houseNo: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      country: ''
    }
  };

  onSubmit() {
    console.log('Form data submitted:', this.formData);

    this.formData = {
      name: '',
      id: '',
      age: '',
      address: {
        houseNo: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: ''
      }
    };
  }
}