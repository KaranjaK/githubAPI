import { Component, OnInit } from '@angular/core';
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
  repo!: any;

  constructor(private githubservice: GithubapiService) {
    this.githubservice.searchUser().subscribe(userData => {
      this.userData = userData
    })
    this.githubservice.searchRepo().subscribe(repos => {
      this.repos = repos
    })
    this.githubservice.getRepo().subscribe(repos => {
      this.repos = repos
    })
  }
  doUserSearch() {
    this.githubservice.profileUpdate(this.username)
    this.githubservice.searchUser().subscribe(userData => {
      this.userData = userData
      console.log(userData)
    })
    this.githubservice.searchRepo().subscribe(repos => {
      this.repos = repos
      console.log(repos)
    })
  }

  doRepoSearch() {
    this.githubservice.repoDisplay(this.repo)
    this.githubservice.getRepo().subscribe(repos => {
      this.repos = repos
      console.log(repos)
    })
}

ngOnInit(): void {
}

}
