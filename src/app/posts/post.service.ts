import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  public getData() {
    return this.http.get('http://localhost:3000/posts').pipe(
      map((res) => {
        return res;
      })
    );
  }
}
