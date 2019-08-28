import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information/information.service';
import { Information } from '../information';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  informations = new Information('', '', '', [], [], [], []);
  constructor(private informationService: InformationService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.informationService
      .getInformation()
      .subscribe((data: Information) => (this.informations = data));
  }

  transform() {
    // console.log(this.informations.img);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + this.informations.img
    );
  }
  reload() {
    this.ngOnInit();
  }
}
