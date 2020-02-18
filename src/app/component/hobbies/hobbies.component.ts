import { Component, OnInit } from "@angular/core";
import { Information } from "../infos/information";
import { InformationService } from "../infos/information.service";
import { selectPersonne } from "../../global";
import { Hobbies } from "./hobbies";

@Component({
  selector: "app-hobbies",
  templateUrl: "./hobbies.component.html",
  styleUrls: ["./hobbies.component.css"]
})
export class HobbiesComponent implements OnInit {
  hobbies: Array<Hobbies>;
  constructor(private informationService: InformationService) {}

  ngOnInit() {
    this.getInformations(selectPersonne);
  }

  getInformations(id) {
    this.informationService
      .getInformation(id)
      .subscribe((data: Information) => (this.hobbies = data.hobbies));
  }
}
