import { Component, OnInit } from '@angular/core';
import { Formation, Formations } from '../formation';
import { FormationService } from '../services/formation/formation.service';

@Component({
  selector: 'app-form-formation',
  templateUrl: './form-formation.component.html',
  styleUrls: ['./form-formation.component.css']
})
export class FormFormationComponent implements OnInit {
  expanded = false;
  submitted = false;
  selectedIndex = null;
  formations = new Formations(0, []);
  formation = new Formation(0, '', '', '', '');

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.getFormation();
  }

  getFormation() {
    this.formationService
      .getFormation(0)
      .subscribe((data: Formations) => (this.formations = data), error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formations);
    this.addFormations();
  }

  addFormations() {
    this.formationService
      .addFormation(this.formations)
      .subscribe(formations => (this.formations = formations));
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  addFormation() {
    if (this.selectedIndex === null) {
      this.formations.formation.push(this.formation);
    } else {
      this.formations.formation[this.selectedIndex] = this.formation;
      this.selectedIndex = null;
    }
  }

  delFormation(item) {
    const index = this.formations.formation.indexOf(item);
    if (index > -1) {
      this.formations.formation.splice(index, 1);
    }
  }

  editFormation(item) {
    this.formation = item;
    this.selectedIndex = this.formations.formation.indexOf(item);
  }
}
