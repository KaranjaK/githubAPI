import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  private username: string;
  private repo!: string;
  private clientid = '367fc5193fa0c21f98ab'
  private clientsecret = '567fe7fb66026ad1124c93b18bcf0e34fb74e936'



  constructor(private http: HttpClient) {
    this.username = 'KaranjaK'
  }

  searchUser() {
    interface apiFeedback {
      login: string
    }
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }
  searchRepo() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
  }

  profileUpdate(username: string) {
    this.username = username;
  }
  repoDisplay(repo: string){
    this.repo = repo;
  }

}
