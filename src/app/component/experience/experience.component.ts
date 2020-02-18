import { Component, OnInit } from "@angular/core";
import { Experience } from "./experience";
import { ExperienceService } from "./experience.service";
import { DomSanitizer } from "@angular/platform-browser";
import { selectPersonne } from "../../global";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getExperience(selectPersonne);
  }

  getExperience(id: number) {
    this.experienceService.getExperience(id).subscribe(
      (data: Experience[]) => (this.experiences = data),
      error => console.log(error)
    );
  }

  transform(base64: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/png;base64, " + base64
    );
  }
}
