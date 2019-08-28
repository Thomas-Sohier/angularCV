import { Component, OnInit } from '@angular/core';
import { infos, Information } from '../information';
import { InformationService } from '../services/information/information.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  infos: infos[] = [];

  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.getInformations();
  }

  getInformations() {
    this.informationService
      .getInformation()
      .subscribe((data: Information) => (this.infos = data.infos));
  }
}
