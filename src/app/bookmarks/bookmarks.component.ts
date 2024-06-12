import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../model/bookmark';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  @Input()
  bookmark!: Bookmark;

  constructor(){}

  ngOnInit() {
  }
}
