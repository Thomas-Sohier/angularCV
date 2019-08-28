import { Component, OnInit } from '@angular/core';
import { hobbies, Information } from '../information';
import { InformationService } from '../services/information/information.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies: Array<hobbies>;
  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.getInformations();
  }

  getInformations() {
    this.informationService
      .getInformation()
      .subscribe((data: Information) => (this.hobbies = data.hobbies));
  }
}
