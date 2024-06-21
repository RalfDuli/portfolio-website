import { Component } from '@angular/core';
import { Accomplishment } from '../model/accomplishment';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  teachingAssistant: Accomplishment = new Accomplishment('Was a Teaching Assistant for two college modules.',
  'These modules focused on the basics of GUI programming with Processing, a language based on Java, and the creation of data structures using C.');
  
  swengShowcase: Accomplishment = new Accomplishment('Got nominated for an award in the Software Engineering industry showcase for two years in a row.',
  'Working with teams of 10 people, I helped create two large-scale projects that got nominated for the annual Software Engineering Industry Award.');
  
  thirdAcc: Accomplishment = new Accomplishment('Achieved a First-class Honors average Throughout all years of study.',
  'This is roughly equivalent to a 3.9 GPA in the US.');
  
  firstClass: Accomplishment = new Accomplishment('Achieved a First-class Honors average Throughout all years of study.',
  'This is roughly equivalent to a 3.9 GPA in the US.');
}
