import { Component, OnInit } from "@angular/core";
import { Information } from "./information";
import { InformationService } from "./information.service";
import { selectPersonne, GlobalVars } from "../../global";
import { Infos } from "./infos";

@Component({
  selector: "app-infos",
  templateUrl: "./infos.component.html",
  styleUrls: ["./infos.component.css"]
})
export class InfosComponent implements OnInit {
  constructor(private informationService: InformationService) {}

  ngOnInit() {}

  get infos() {
    return GlobalVars.information.infos;
  }
}
