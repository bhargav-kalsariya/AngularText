import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss'],
})
export class HttpRequestComponent implements OnInit {
  postData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.postData = data;
      });
  }
}
