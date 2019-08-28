import { Component, OnInit } from '@angular/core';
import * as PHE from 'print-html-element';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  print() {
    PHE.printElement(document.getElementById('toPrint'));
  }
}
