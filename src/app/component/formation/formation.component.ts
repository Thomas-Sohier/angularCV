import { Component, OnInit } from "@angular/core";
import { FormationService } from "./formation.service";
import { Formation } from "./formation";
import { selectPersonne } from "../../global";

@Component({
  selector: "app-formation",
  templateUrl: "./formation.component.html",
  styleUrls: ["./formation.component.css"]
})
export class FormationComponent implements OnInit {
  formations: Formation[] = [];

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.getFormation(selectPersonne);
  }

  getFormation(id) {
    this.formationService.getFormations().subscribe(
      (data: Formation[]) => (this.formations = data),
      error => console.log(error)
    );
  }
}
