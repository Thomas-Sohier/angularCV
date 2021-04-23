import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalVars } from '../../global';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  get infos() {
    return GlobalVars.information.infos;
  }

  transform(base64: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + base64
    );
  }
}
