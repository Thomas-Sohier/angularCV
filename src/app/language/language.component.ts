import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information/information.service';
import { Information, language } from '../information';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages: language[] = [];

  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.getInformations();
  }

  counter(i: number) {
    return new Array(i);
  }

  getInformations() {
    this.informationService
      .getInformation()
      .subscribe((data: Information) => (this.languages = data.languages));
  }
}
