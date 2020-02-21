import { Component, OnInit } from "@angular/core";
import { InformationService } from "../infos/information.service";
import { Information } from "../infos/information";
import { DomSanitizer } from "@angular/platform-browser";
import { GlobalVars } from "../../global";
import { FormationService } from "../formation/formation.service";
import { Formation } from "../formation/formation";
import { ExperienceService } from "../experience/experience.service";
import { Experience } from "../experience/experience";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"]
})
export class CvComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    GlobalVars.experiences =
      JSON.parse(localStorage.getItem("experiences")) ?? [];
    GlobalVars.information =
      JSON.parse(localStorage.getItem("information")) ??
      new Information(0, "", "", "", [], [], [], []);
    GlobalVars.formations =
      JSON.parse(localStorage.getItem("formations")) ?? [];
  }

  get information() {
    return GlobalVars.information;
  }

  get formations() {
    return GlobalVars.formations;
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/png;base64, " + this.information.img
    );
  }
}
