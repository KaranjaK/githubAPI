import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  constructor(private http: HttpClient) { }

  searchUser(): Observable<any> {

    const link = "https://api.github.com/users"

    return this.http.get <any>(link)

  }
}
