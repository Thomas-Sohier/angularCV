import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { selectPersonne } from '../../global';
import { Information } from '../infos/information';
import { Infos } from '../infos/infos';
import { Language } from 'src/app/language/language';
import { Skills } from '../skills/skills';
import { Hobbies } from '../hobbies/hobbies';
import { InformationService } from '../infos/information.service';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent implements OnInit {
  expanded = false;
  submitted = false;
  selectedIndex = null;
  base64textString = '';
  file = '';
  information = new Information(0, '', '', '', [], [], [], []);

  // Infos
  infos = new Infos('', '');
  // Languages
  language = new Language('', 0);
  // Skills
  skills = new Skills('', '');
  // Hobbies
  hobbies = new Hobbies('');

  constructor(
    private informationService: InformationService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getInformation(selectPersonne);
  }

  onSubmit() {
    this.submitted = true;
    this.addInformation();
  }

  // Call this method in the image source, it will sanitize it.
  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:image/png;base64, ' + this.base64textString
    );
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.information.img = this.base64textString;
    // console.log(btoa(binaryString));
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  calculateLevel(level: number) {
    let levelString;
    switch (level) {
      case 0:
        levelString = 'A1';
        break;
      case 1:
        levelString = 'A2';
        break;
      case 2:
        levelString = 'B1';
        break;
      case 3:
        levelString = 'B2';
        break;
      case 4:
        levelString = 'C1';
        break;
      case 5:
        levelString = 'C2';
        break;
    }
    return levelString;
  }

  addInformation() {
    this.informationService
      .addInformation(this.information)
      .subscribe(information => (this.information = information));
  }

  getInformation(id) {
    this.informationService
      .getInformation(id)
      .subscribe(information => (this.information = information));
  }

  // Commmands for different personnal data
  // Infos
  addInfo() {
    if (this.selectedIndex === null) {
      this.information.infos.push(this.infos);
    } else {
      this.information.infos[this.selectedIndex] = this.infos;
      this.selectedIndex = null;
      // this.btnAddText = 'Ajouter une expérience';
    }
    this.resetInfos();
  }

  delInfos(item: Infos) {
    const index = this.information.infos.indexOf(item);
    if (index > -1) {
      this.information.infos.splice(index, 1);
    }
  }

  editInfos(item: Infos) {
    this.infos = item;
    this.selectedIndex = this.information.infos.indexOf(item);
    // this.btnAddText = 'Mettre à jour';
  }

  resetInfos() {
    this.infos = new Infos('', '');
  }

  // Language
  addLanguage() {
    this.language.levelString = this.calculateLevel(this.language.level);
    if (this.selectedIndex === null) {
      this.information.languages.push(this.language);
    } else {
      this.information.languages[this.selectedIndex] = this.language;
      this.selectedIndex = null;
      // this.btnAddText = 'Ajouter une expérience';
    }
    this.resetLanguage();
  }

  delLanguage(item: Language) {
    const index = this.information.languages.indexOf(item);
    if (index > -1) {
      this.information.languages.splice(index, 1);
    }
  }

  editLanguage(item: Language) {
    this.language = item;
    this.selectedIndex = this.information.languages.indexOf(item);
    // this.btnAddText = 'Mettre à jour';
  }

  resetLanguage() {
    this.language = new Language('', 0);
  }

  // Skills
  addSkill() {
    if (this.selectedIndex === null) {
      this.information.skills.push(this.skills);
    } else {
      this.information.skills[this.selectedIndex] = this.skills;
      this.selectedIndex = null;
      // this.btnAddText = 'Ajouter une expérience';
    }
    this.resetSkill();
  }

  delSkill(item: Skills) {
    const index = this.information.skills.indexOf(item);
    if (index > -1) {
      this.information.skills.splice(index, 1);
    }
  }

  editSkill(item: Skills) {
    this.skills = item;
    this.selectedIndex = this.information.skills.indexOf(item);
    // this.btnAddText = 'Mettre à jour';
  }

  resetSkill() {
    this.skills = new Skills('', '');
  }

  // Hobbies
  addHobbie() {
    if (this.selectedIndex === null) {
      this.information.hobbies.push(this.hobbies);
    } else {
      this.information.hobbies[this.selectedIndex] = this.hobbies;
      this.selectedIndex = null;
      // this.btnAddText = 'Ajouter une expérience';
    }
    this.resetHobbie();
  }

  delHobbie(item: Hobbies) {
    const index = this.information.hobbies.indexOf(item);
    if (index > -1) {
      this.information.hobbies.splice(index, 1);
    }
  }

  editHobbie(item: Hobbies) {
    this.hobbies = item;
    this.selectedIndex = this.information.hobbies.indexOf(item);
    // this.btnAddText = 'Mettre à jour';
  }

  resetHobbie() {
    this.hobbies = new Hobbies('');
  }
}
