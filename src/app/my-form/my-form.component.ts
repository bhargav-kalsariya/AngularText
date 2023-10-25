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

    console.log(f.value);
    f.resetForm();
  }

}