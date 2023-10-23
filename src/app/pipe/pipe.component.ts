import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  ngOnInit(): void { }
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
      description: 'follow the passion',
      age: 12,
      hobby: 'cricket',
    },
    {
      name: 'random',
      description: 'it is mind game',
      age: 15,
      hobby: 'chess',
    },
    {
      name: 'sunil pawar',
      description: 'it is strength game',
      age: 17,
      hobby: 'kabaddi',
    },
  ];
}
