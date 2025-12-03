import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  public getAllUser(): Observable<any> {
    return this.http.get('http://localhost:3000/users').pipe(map((res) => res));
  }
}
