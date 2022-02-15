import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Users } from '../Classes/users';
import { Repositories } from '../Classes/repositories';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  username?: string;



  constructor(private http: HttpClient) {
  }

  searchUser(term: string) {
  }

}
