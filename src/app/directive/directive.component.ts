import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent {
  textColor = 'red';
  isHighlighted = false;
  isActive = true;
  fontSize = '16px';
  value: any = 'B';
  data: string = '';
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
