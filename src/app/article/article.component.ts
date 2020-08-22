import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;
    return false; // add return false to ensure the browser does not propagate the event upwards
  }

  voteDown() {
    this.votes -= 1;
    return false;
  }

  ngOnInit(): void {
  }

}
