import { Component, OnInit } from '@angular/core';
import { profile } from 'console';
import { GithubapiService } from '../services/githubapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userData: any = {
    login: '',
    company: '',
    location: '',
    avatar_url: '',
    public_repos: '',
    public_gist: '',
    followers: '',
    following: '',
    email: '',
    bio: '',
    created_at: ''
  };
  repos!: any;
  username!: string;

  constructor(private githubservice: GithubapiService) { 
    this.githubservice.searchUser().subscribe(userData => {
      this.userData = userData 
    })
    this.githubservice.searchRepo().subscribe(repos => {
      this.repos = repos
    })
  }
   doUserSearch() {
    this.githubservice.profileUpdate(this.username)
    this.githubservice.searchUser().subscribe(userData => {
      this.userData = this.userData
    })
    this.githubservice.searchRepo().subscribe(repos => {
      this.repos = repos
    })
  }

  ngOnInit(): void {
  }

}
