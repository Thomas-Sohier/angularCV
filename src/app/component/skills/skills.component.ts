import { Component, OnInit } from '@angular/core';
import { GlobalVars } from '../../global';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get skills() {
    return GlobalVars.information.skills;
  }
}
