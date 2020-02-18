import { Component, OnInit } from "@angular/core";
import { Information } from "./information";
import { InformationService } from "./information.service";
import { selectPersonne } from "../../global";
import { Infos } from "./infos";

@Component({
  selector: "app-infos",
  templateUrl: "./infos.component.html",
  styleUrls: ["./infos.component.css"]
})
export class InfosComponent implements OnInit {
  infos: Infos[] = [];

  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.getInformations(selectPersonne);
  }

  getInformations(id) {
    this.informationService
      .getInformation(id)
      .subscribe((data: Information) => (this.infos = data.infos));
  }
}
