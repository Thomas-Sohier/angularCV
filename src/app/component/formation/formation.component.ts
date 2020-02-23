import { Component, OnInit } from '@angular/core';
import { GlobalVars } from '../../global';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get formations() {
    return GlobalVars.formations;
  }
}
