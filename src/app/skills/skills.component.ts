import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information/information.service';
import { Information, skills } from '../information';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Array<skills>;
  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.getInformations();
  }

  getInformations() {
    this.informationService
      .getInformation()
      .subscribe((data: Information) => (this.skills = data.skills));
  }
}
