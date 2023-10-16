import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  title = 'angularTest';
  Bday = new Date();
  price = 1234.35442;
  object = { name: 'random', age: 30 };
  numberValue = 3.1335444;
  percentValue = 0.75;
  searchTerm: string = '';
  items: any[] = [
    { name: 'Item 1', description: 'Description 1' },
    { name: 'Item 2', description: 'Description 2' },
    { name: 'Item 3', description: 'Description 3' },
  ];
}
