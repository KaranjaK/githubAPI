import { Component } from '@angular/core';
import { GithubapiService } from './services/githubapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  users!: String[];

  constructor(private githubservice:GithubapiService){}

  searchUSer(){

    this.githubservice.searchUser().subscribe((data) =>
      console.log(data)
    )
  }

}
