import { Component, OnInit } from "@angular/core";
import { GlobalVars } from "src/app/global";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.css"]
})
export class LanguageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get languages() {
    return GlobalVars.information.languages;
  }

  counter(i: number) {
    return new Array(i);
  }
}
