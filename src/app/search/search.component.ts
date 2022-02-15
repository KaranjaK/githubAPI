import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../services/githubapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users!: String[];

  constructor(private githubservice: GithubapiService) { }

  ngOnInit(): void {
  }

  doUserSearch(term: string){
    this.githubservice.searchUser(term)
  }
  
}
