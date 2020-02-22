import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation/formation';
import { GlobalVars } from '../../global';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-formation',
  templateUrl: './form-formation.component.html',
  styleUrls: ['./form-formation.component.css']
})
export class FormFormationComponent implements OnInit {
  expanded = false;
  submitted = false;
  selectedIndex = null;
  formation = new Formation(0, '', '', '', '');

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  get formations() {
    return GlobalVars.formations;
  }

  onSubmit() {
    this.submitted = true;
    this.addFormations();
  }

  addFormations() {
    localStorage.setItem('formations', JSON.stringify(GlobalVars.formations));
    this.openSnackBar('Formations ajoutées', null);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
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
    this.resetFormation();
  }

  resetFormation() {
    this.formation = new Formation(
      GlobalVars.formations.length + 1,
      '',
      '',
      '',
      ''
    );
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
