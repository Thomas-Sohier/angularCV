import { Component, OnInit } from '@angular/core';
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
  currentTheme: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.selectedPersonne = selectPersonne;
    this.themes = this.themeService.getAvailableThemes();
    this.currentTheme = this.themeService.getActiveTheme().name;
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

      this.saveGlobalVars();
    };
    reader.onerror = () => {
      console.error('Failed to read this file');
    };
  }

  changeTheme() {
    const themeSelected: Theme = this.themeService.getTheme(this.currentTheme);
    this.themeService.setActiveTheme(themeSelected);
    localStorage.setItem(
      'theme',
      JSON.stringify(this.themeService.getActiveTheme())
    );
  }
  saveGlobalVars() {
    localStorage.setItem('experiences', JSON.stringify(GlobalVars.experiences));
    localStorage.setItem('formations', JSON.stringify(GlobalVars.formations));
    localStorage.setItem('information', JSON.stringify(GlobalVars.information));
    localStorage.setItem(
      'theme',
      JSON.stringify(this.themeService.getActiveTheme())
    );
  }

  print() {
    const html = window.document;
    const innerContents = html.querySelector('#cv').parentElement.innerHTML;
    html.querySelector('body').innerHTML = innerContents;
    const popupWinindow = window.open('', '_blank', '');
    let node = html.querySelector('html').querySelector('#cv') as HTMLElement;
    node.style.transform = ('scale(1)')
    popupWinindow.document.write(html.querySelector('html').outerHTML);
    popupWinindow.focus();
    popupWinindow.print();
    this.saveGlobalVars();
    window.location.reload();
  }
}
