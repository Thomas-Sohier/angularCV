import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation/formation';
import { FormationService } from '../formation/formation.service';
import { selectPersonne } from '../../global';

@Component({
  selector: 'app-form-formation',
  templateUrl: './form-formation.component.html',
  styleUrls: ['./form-formation.component.css']
})
export class FormFormationComponent implements OnInit {
  expanded = false;
  submitted = false;
  selectedIndex = null;
  formations: Formation[] = [];
  formation = new Formation(0, '', '', '', '');

  constructor(private formationService: FormationService) {}

  ngOnInit() {
    this.getFormation();
  }

  getFormation() {
    this.formationService.getFormations().subscribe(
      (data: Formation[]) => (this.formations = data),
      error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formations);
    this.addFormations();
  }

  addFormations() {
    this.formationService
      .addFormation(this.formation)
      .subscribe(formation => (this.formation = formation));
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  addFormation() {
    if (this.selectedIndex === null) {
      this.formations.push(this.formation);
    } else {
      this.formations[this.selectedIndex] = this.formation;
      this.selectedIndex = null;
    }
  }

  delFormation(item) {
    const index = this.formations.indexOf(item);
    if (index > -1) {
      this.formations.splice(index, 1);
    }
  }

  editFormation(item) {
    this.formation = item;
    this.selectedIndex = this.formations.indexOf(item);
  }
}
