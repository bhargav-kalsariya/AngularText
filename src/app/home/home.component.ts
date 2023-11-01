import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showData: any;
  posts: any[] = [];

  constructor(private takeDataByBS: SharingService, private httpData: SharingService) { }

  ngOnInit(): void {

    this.takeDataByBS.shareData.subscribe((data) => {
      this.showData = data
    })

  }

  fetchData() {
    this.httpData.getPosts().subscribe((data) => {
      this.posts = data
    })
  }

}
