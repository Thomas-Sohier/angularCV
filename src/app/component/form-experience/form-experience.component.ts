import { Component, OnInit } from "@angular/core";
import { Experience } from "../experience/experience";
import { DomSanitizer } from "@angular/platform-browser";
import { GlobalVars } from "../../global";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-form-experience",
  templateUrl: "./form-experience.component.html",
  styleUrls: ["./form-experience.component.css"]
})
export class FormExperienceComponent implements OnInit {
  expanded = false;
  submitted = false;
  selectedIndex = null;
  base64textString = "";
  btnAddText = "Ajouter une expérience";
  experience = new Experience(0, "", "", "", "", "", "");

  constructor(
    private sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  get experiences() {
    return GlobalVars.experiences;
  }

  onSubmit() {
    this.submitted = true;
    this.addExperiences();
  }

  // Call this method in the image source, it will sanitize it.
  transform(img: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "data:image/png;base64, " + img
    );
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.experience.img = this.base64textString;
    // console.log(btoa(binaryString));
  }

  addExperiences() {
    localStorage.setItem("experiences", JSON.stringify(GlobalVars.experiences));
    this.openSnackBar("Expériences ajoutées", null);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  addExp() {
    if (this.selectedIndex === null) {
      GlobalVars.experiences.push(this.experience);
    } else {
      GlobalVars.experiences[this.selectedIndex] = this.experience;
      this.selectedIndex = null;
      this.btnAddText = "Ajouter une expérience";
    }
    this.resetExperience();
  }

  resetExperience() {
    this.experience = new Experience(
      GlobalVars.experiences.length + 1,
      "",
      "",
      "",
      "",
      "",
      ""
    );
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  delExp(item) {
    const index = GlobalVars.experiences.indexOf(item);
    if (index > -1) {
      GlobalVars.experiences.splice(index, 1);
    }
  }

  editExp(item) {
    this.experience = item;
    this.selectedIndex = GlobalVars.experiences.indexOf(item);
    this.btnAddText = "Mettre à jour";
  }
}
