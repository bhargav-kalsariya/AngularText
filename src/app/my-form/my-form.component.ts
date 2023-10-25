import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {

  onSubmit(f: NgForm) {
    if (f.invalid) {
      return;
    }

    const formdata = {
      name: f.value.name,
      id: f.value.id,
      age: f.value.age,
      address: {
        street: f.value.address.street,
        city: f.value.address.city,
        zipcode: f.value.address.zipcode
      }
    }

    console.log(formdata);
    f.reset();
  }

}