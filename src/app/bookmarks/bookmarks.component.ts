import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../model/bookmark';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  @Input()
  bookmark!: Bookmark;

  constructor(private scroller: ViewportScroller) {}
  
  scrollToElem(elemStr: string) {
    console.log("HI!");
    document.getElementById(elemStr)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
