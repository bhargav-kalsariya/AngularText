import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularTest';
  Bday = new Date();
  price = 1234.35442;
  object = { name: 'random', age: 30 };
  numberValue = 3.1335444;
  percentValue = 0.75;
}
