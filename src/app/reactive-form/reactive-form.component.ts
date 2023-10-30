import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  id = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required, Validators.min(18), Validators.max(75)]);
  email = new FormControl('', [Validators.required, Validators.email]);

  handleSubmit() {
    if (this.id.valid && this.name.valid && this.age.valid && this.email.valid) {
      console.log({
        id: this.id.value,
        name: this.name.value,
        age: this.age.value,
        email: this.email.value
      });
    }
  }
}
