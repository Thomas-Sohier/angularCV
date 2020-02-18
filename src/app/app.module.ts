import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatSliderModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { CvComponent } from './component/cv/cv.component';
import { FormationComponent } from './component/formation/formation.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FormComponent } from './component/form/form.component';
import { FormsModule } from '@angular/forms';
import { InfosComponent } from './component/infos/infos.component';
import { LanguageComponent } from './language/language.component';
import { SkillsComponent } from './component/skills/skills.component';
import { HobbiesComponent } from './component/hobbies/hobbies.component';
import { FormInfoComponent } from './component/form-info/form-info.component';
import { FormExperienceComponent } from './component/form-experience/form-experience.component';
import { FormFormationComponent } from './component/form-formation/form-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    FormationComponent,
    ExperienceComponent,
    FormComponent,
    InfosComponent,
    LanguageComponent,
    SkillsComponent,
    HobbiesComponent,
    FormInfoComponent,
    FormExperienceComponent,
    FormFormationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule,
    FormsModule,
    PickerModule,
    MatSelectModule
  ],
  providers: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
