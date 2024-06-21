import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AccomplishmentComponent } from './accomplishment/accomplishment.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent,
    BookmarksComponent,
    AccomplishmentComponent,
    CvSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
