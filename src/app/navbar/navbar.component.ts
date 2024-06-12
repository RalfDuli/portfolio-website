import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  myName:string = 'Ralf Duli'
  subtitle:string = 'Dublin-based Software Engineer looking to craft solutions with code.'
  linkedinLink:string = 'https://www.linkedin.com/in/ralf-duli-0ba703224/';
  githubLink:string = 'https://github.com/RalfDuli';
}
