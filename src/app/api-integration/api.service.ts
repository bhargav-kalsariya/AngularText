import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getData(id: number): Observable<any> {
    const path = '/posts/';
    return this.http.get<any>(`${environment.BASE_URL}${path}${id}`);
  }
  public getAllData(): Observable<any> {
    const path = '/posts';
    return this.http.get<any>(`${environment.BASE_URL}${path}`);
  }
}
