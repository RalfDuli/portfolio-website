import { Component } from '@angular/core';
import { projectCardObj } from '../model/projectcard';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent {
  networkRoutingProject : projectCardObj = new projectCardObj('Reactive Routing Network',
  ' I created a reactive routing network that consists of a set of endpoints and routers. The routers dynamically relay information from one endpoint to another, and adapt according to changes in the network.',
  '/../assets/routing-network.png',
  'https://github.com/RalfDuli/a2-python');

  chessEngineProject : projectCardObj = new projectCardObj('Chess Engine',
  'Working in a large team of 11 people, I participated in the creation of a chess computer. This project received a top 3 placing in the SwEng Industry Awards.',
  '/../assets/chess-engine.png',
  'https://github.com/b-paisley/SwEng-Group24');
}
