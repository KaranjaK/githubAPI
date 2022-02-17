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
  repoData: any = {
    name: '',
    owner: '',
    description: ''
  };
  repos!: any;
  username!: string;
  repo!: string;

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
      this.userData = userData
    })
    this.githubservice.searchRepo().subscribe(repos => {
      this.repos = repos
    })
  }

  doRepoSearch() {
    this.githubservice.repoDisplay(this.repo)
    this.githubservice.getRepo().subscribe(repoData => {
      this.repoData = repoData
    })
}

ngOnInit(): void {
}

}
