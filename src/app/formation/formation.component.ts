import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation/formation.service';
import { Formation, Formations } from '../formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations = new Formations(0, []);

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.getFormation(0);
  }

  getFormation(id) {
    this.formationService
      .getFormation(id)
      .subscribe((data: Formations) => (this.formations = data), error => console.log(error));
  }
}
