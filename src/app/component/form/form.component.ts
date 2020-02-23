import { Component, OnInit } from '@angular/core';
import * as PHE from 'print-html-element';
import { Personne } from '../personne/personne';
import { selectPersonne, GlobalVars } from '../../global';
import { ThemeService } from 'src/app/theme/theme.service';
import { Theme } from 'src/app/theme/theme';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne: number;
  themes: Theme[] = [];
  currentTheme: Theme;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.selectedPersonne = selectPersonne;
    this.themes = this.themeService.getAvailableThemes();
  }

  downloadJSON() {
    let finalJSON = '[';
    finalJSON += JSON.stringify(GlobalVars.experiences) + ',';
    finalJSON += JSON.stringify(GlobalVars.formations) + ',';
    finalJSON += JSON.stringify(GlobalVars.information);
    finalJSON += ']';

    const blob = new Blob([finalJSON], { type: 'application/json' });
    saveAs(blob, 'monCV.json');
  }

  importJSON(file) {
    const reader = new FileReader();
    reader.readAsText(file[0]);
    reader.onload = evt => {
      const obj = JSON.parse(evt.target.result.toString());
      GlobalVars.experiences = obj[0];
      GlobalVars.formations = obj[1];
      GlobalVars.information = obj[2];

      localStorage.setItem(
        'experiences',
        JSON.stringify(GlobalVars.experiences)
      );
      localStorage.setItem('formations', JSON.stringify(GlobalVars.formations));
      localStorage.setItem(
        'information',
        JSON.stringify(GlobalVars.information)
      );
    };
    reader.onerror = evt => {
      console.error('Failed to read this file');
    };
  }

  changeTheme() {
    this.themeService.setActiveTheme(this.currentTheme);
  }

  print() {
    PHE.printElement(document.getElementById('cv'));
  }
}
