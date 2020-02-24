import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';
  languages = [
    { id: 'fr', name: '🇫🇷 Français' },
    { id: 'en', name: '🇬🇧 English' }
  ];
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('fr');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr');
    this.currentLanguage = translate.currentLang;
  }

  changeLanguage() {
    this.translate.use(this.currentLanguage).subscribe(response => {
      console.log(response);
    });
  }
}
