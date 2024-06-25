import { Component } from '@angular/core';
import { projectCardObj } from '../model/projectcard';
import { Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()
  project!: projectCardObj;
}
