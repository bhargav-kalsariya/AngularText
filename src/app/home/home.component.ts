import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showData: any;

  constructor(private takeDataByBS: SharingService) { }

  ngOnInit(): void {

    this.takeDataByBS.shareData.subscribe((data) => {
      this.showData = data
    })

  }

}
