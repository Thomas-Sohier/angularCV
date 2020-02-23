import { Component, OnInit } from '@angular/core';
import { GlobalVars } from '../../global';
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  get hobbies() {
    return GlobalVars.information.hobbies;
  }
}
