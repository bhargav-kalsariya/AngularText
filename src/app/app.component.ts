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
    {
      name: 'kohli',
      description: 'Description 1',
      age: 12,
      hobby: 'cricket',
    },
    {
      name: 'random',
      description: 'Description 2',
      age: 15,
      hobby: 'chess',
    },
    {
      name: 'sunil pawar',
      description: 'Description 3',
      age: 17,
      hobby: 'kabaddi',
    },
  ];
}
