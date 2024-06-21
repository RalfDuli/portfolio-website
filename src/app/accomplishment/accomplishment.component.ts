import { Component, Input } from '@angular/core';
import { Accomplishment } from '../model/accomplishment';

@Component({
  selector: 'app-accomplishment',
  templateUrl: './accomplishment.component.html',
  styleUrls: ['./accomplishment.component.css']
})
export class AccomplishmentComponent {
  @Input()
  accomplishment!: Accomplishment;
}
