import { Component, OnInit } from "@angular/core";
import { Language } from "./language";
import { InformationService } from "../infos/information.service";
import { Information } from "../infos/information";
import { selectPersonne, GlobalVars } from "src/app/global";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.css"]
})
export class LanguageComponent implements OnInit {
  constructor(private informationService: InformationService) {}

  ngOnInit() {}

  get languages() {
    return GlobalVars.information.languages;
  }

  counter(i: number) {
    return new Array(i);
  }
}
