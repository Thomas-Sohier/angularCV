import { Component, OnInit } from '@angular/core';
import { InformationService } from '../component/infos/information.service';
import { Information, language } from '../component/infos/information';
import { selectPersonne } from '../global';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages: language[] = [];

  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.getInformations(selectPersonne);
  }

  counter(i: number) {
    return new Array(i);
  }

  getInformations(id) {
    this.informationService
      .getInformation(id)
      .subscribe((data: Information) => (this.languages = data.languages));
  }
}
