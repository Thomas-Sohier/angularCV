import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalVars } from '../../global';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  get experiences() {
    return GlobalVars.experiences;
  }

  transform(base64: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + base64
    );
  }
}
