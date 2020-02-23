import { Component, OnInit } from '@angular/core';
import { GlobalVars } from '../../global';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get infos() {
    return GlobalVars.information.infos;
  }
}
