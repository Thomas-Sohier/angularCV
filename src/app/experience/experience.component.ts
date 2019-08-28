import { Component, OnInit } from '@angular/core';
import { Experience, Experiences } from '../experience';
import { ExperienceService } from '../services/experience/experience.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences = new Experiences(0, []);
  experience = new Experience('', '', '', '', '', '');

  constructor(private experienceService: ExperienceService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.getExperience(0);
  }

  getExperience(id: number) {
    this.experienceService
      .getExperience(id)
      .subscribe((data: Experiences) => (this.experiences = data), error => console.log(error));
  }

  transform(base64: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + base64);
  }
}
