import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // GET
  public getData(id: number): Observable<any> {
    debugger;
    const path: string = '/posts/';
    return this.httpClient.get<any>(`${Environment.API}${path}${id}`);
  }

  // POST

  // PUT

  // DELETE
}