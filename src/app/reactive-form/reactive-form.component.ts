import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  id = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);

  address = new FormGroup({
    address1: new FormControl('', Validators.required),
    address2: new FormControl(''),
    landmark: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  });

  countries = ['USA', 'Canada', 'UK', 'Australia'];
  states = ['New York', 'California', 'Texas', 'Ontario', 'London'];
  cities = ['New York City', 'Los Angeles', 'San Francisco', 'Toronto', 'London'];

  handleSubmit() {
    const formData = {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      address: this.address.value
    };
    console.log('Form Data:', formData);
  }
}
