import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements OnInit {
  @Input() label = 'Choisir un fichier';
  @Input() id = 'default';
  @Output() file = new EventEmitter<any>();

  constructor() {}

  outputFile(file: any) {
    this.file.emit(file);
  }

  ngOnInit(): void {}
}
