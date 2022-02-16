import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get('https://api.github.com/users/KaranjaK?access_token=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' + this.username + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
  }
  searchRepo() {
    return this.http.get('https://api.github.com/repositories/' + this.username + '/repos?client_id=' + this.clientId + '&client_secret=' + this.clientSecret)
  }

  profileUpdate(username: string) {
    this.username = username;
  }

}
