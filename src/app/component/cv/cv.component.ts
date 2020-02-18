import { Component, OnInit } from '@angular/core';
import { InformationService } from '../infos/information.service';
import { Information } from '../infos/information';
import { DomSanitizer } from '@angular/platform-browser';
import { selectPersonne } from '../../global';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  informations = new Information(selectPersonne, '', '', '', [], [], [], []);
  constructor(private informationService: InformationService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.showConfig(selectPersonne);
  }

  showConfig(id) {
    this.informationService
      .getInformation(id)
      .subscribe((data: Information) => (this.informations = data));
  }

  transform() {
    // console.log(this.informations.img);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + this.informations.img
    );
  }

  reload() {
    console.log(selectPersonne);
    this.ngOnInit();
  }
}
