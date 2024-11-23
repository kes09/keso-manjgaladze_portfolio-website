import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private baseUrl = 'https://api.github.com/users/kes09';

  constructor(private http: HttpClient) {}

  
  getRepositories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/repos`);
  }
}
