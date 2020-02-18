import { Component, OnInit } from '@angular/core';
import * as PHE from 'print-html-element';
import { Personne } from '../personne/personne';
import { PersonneService } from '../personne/personne.service';
import { selectPersonne, changeSelectPersonne } from '../../global';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne: number;
  // selectTheme = 0; //TODO à ajouter plus tard
  constructor(private personneService: PersonneService) {}

  ngOnInit() {
    this.selectedPersonne = selectPersonne;
    this.getPersonnes();
  }

  print() {
    PHE.printElement(document.getElementById('toPrint'));
  }

  savePersonne(value) {
    // console.log(value);
    changeSelectPersonne(value);
  }

  getPersonnes() {
    this.personneService
      .getPersonnes()
      .subscribe((data: Personne[]) => (this.personnes = data), error => console.log(error));
  }
}
