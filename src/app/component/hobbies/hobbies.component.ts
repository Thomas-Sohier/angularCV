import { Component, OnInit } from "@angular/core";
import { Information } from "../infos/information";
import { InformationService } from "../infos/information.service";
import { selectPersonne, GlobalVars } from "../../global";
import { Hobbies } from "./hobbies";

@Component({
  selector: "app-hobbies",
  templateUrl: "./hobbies.component.html",
  styleUrls: ["./hobbies.component.css"]
})
export class HobbiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get hobbies() {
    return GlobalVars.information.hobbies;
  }
}
