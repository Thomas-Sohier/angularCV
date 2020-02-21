import { Component, OnInit } from "@angular/core";
import { FormationService } from "./formation.service";
import { Formation } from "./formation";
import { selectPersonne, GlobalVars } from "../../global";

@Component({
  selector: "app-formation",
  templateUrl: "./formation.component.html",
  styleUrls: ["./formation.component.css"]
})
export class FormationComponent implements OnInit {
  constructor(private formationService: FormationService) {}

  ngOnInit() {}

  get formations() {
    return GlobalVars.formations;
  }
}
