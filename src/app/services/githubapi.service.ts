import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Classes/users';
import { Repositories } from '../Classes/repositories';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  username: string;
  clientId = '367fc5193fa0c21f98ab'
  clientSecret = '567fe7fb66026ad1124c93b18bcf0e34fb74e936'



  constructor(private http: HttpClient) {
    this.username = 'KaranjaK'
  }

  searchUser() {
    interface apiFeedback {
      login: string
    }
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
      // .pipe(map(res => res.json()))
  }
  searchRepo() {
    return this.http.get('https://api.github.com/repositories/' + this.username + '/repos?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
      // .pipe(map(res => res.json()))
  }

  profileUpdate (username: string){
    this.username = username;
  }

}
