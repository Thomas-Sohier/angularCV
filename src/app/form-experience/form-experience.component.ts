import { Component, OnInit } from '@angular/core';
import { Experience, Experiences } from '../experience';
import { ExperienceService } from '../services/experience/experience.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-form-experience',
  templateUrl: './form-experience.component.html',
  styleUrls: ['./form-experience.component.css']
})
export class FormExperienceComponent implements OnInit {
  expanded = false;
  submitted = false;
  selectedIndex = null;
  base64textString = '';
  btnAddText = 'Ajouter une expérience';
  experiences = new Experiences(0, []);
  experience = new Experience('', '', '', '', '', '');

  constructor(private experienceService: ExperienceService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getExperience();
  }

  getExperience() {
    this.experienceService
      .getExperience(0)
      .subscribe((data: Experiences) => (this.experiences = data), error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.addExperiences();
  }

  // Call this method in the image source, it will sanitize it.
  transform(img: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + img);
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
    this.experience.img = this.base64textString;
    // console.log(btoa(binaryString));
  }

  addExperiences() {
    this.experienceService
      .addExperience(this.experiences)
      .subscribe(experiences => (this.experiences = experiences));
  }

  addExp() {
    if (this.selectedIndex === null) {
      this.experiences.experience.push(this.experience);
    } else {
      this.experiences.experience[this.selectedIndex] = this.experience;
      this.selectedIndex = null;
      this.btnAddText = 'Ajouter une expérience';
    }
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  delExp(item) {
    const index = this.experiences.experience.indexOf(item);
    if (index > -1) {
      this.experiences.experience.splice(index, 1);
    }
  }

  editExp(item) {
    this.experience = item;
    this.selectedIndex = this.experiences.experience.indexOf(item);
    this.btnAddText = 'Mettre à jour';
  }
}
