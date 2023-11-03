import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  path = '/posts/';

  constructor(private http: HttpClient) {}

  // get request

  public getData(id: number): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}${this.path}${id}`);
  }
  public getAllData(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_URL}${this.path}`);
  }

  // post request

  public postData(data: any): Observable<any> {
    return this.http.post<any>(`${environment.BASE_URL}${this.path}`, data);
  }

  // patch request

  public patchData(dataId: number, data: any): Observable<any> {
    return this.http.patch<any>(
      `${environment.BASE_URL}${this.path}${dataId}`,
      data
    );
  }
}
