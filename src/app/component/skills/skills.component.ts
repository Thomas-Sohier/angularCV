import { Component, OnInit } from '@angular/core';
import { InformationService } from '../infos/information.service';
import { Information, skills } from '../infos/information';
import { selectPersonne } from '../../global';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Array<skills>;
  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.getInformations(selectPersonne);
  }

  getInformations(id) {
    this.informationService
      .getInformation(id)
      .subscribe((data: Information) => (this.skills = data.skills));
  }
}
