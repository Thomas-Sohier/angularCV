import { Component, OnInit } from '@angular/core';
import { Information } from '../infos/information';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalVars } from '../../global';
import { ThemeService } from 'src/app/theme/theme.service';
import { Theme } from 'src/app/theme/theme';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    GlobalVars.experiences =
      JSON.parse(localStorage.getItem('experiences')) ?? [];
    GlobalVars.information =
      JSON.parse(localStorage.getItem('information')) ??
      new Information(0, '', '', '', [], [], [], []);
    GlobalVars.formations =
      JSON.parse(localStorage.getItem('formations')) ?? [];
    this.themeService.setActiveTheme(
      JSON.parse(localStorage.getItem('theme')) ??
        this.themeService.getActiveTheme()
    );
  }

  get information() {
    return GlobalVars.information;
  }

  get formations() {
    return GlobalVars.formations;
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + this.information.img
    );
  }
}
