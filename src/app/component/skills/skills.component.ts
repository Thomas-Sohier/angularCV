import { Component, OnInit } from "@angular/core";
import { InformationService } from "../infos/information.service";
import { Information } from "../infos/information";
import { selectPersonne, GlobalVars } from "../../global";
import { Skills } from "./skills";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get skills() {
    return GlobalVars.information.skills;
  }
}
