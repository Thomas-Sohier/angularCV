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
  MatListModule
} from '@angular/material';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { CvComponent } from './cv/cv.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { InfosComponent } from './infos/infos.component';
import { LanguageComponent } from './language/language.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FormInfoComponent } from './form-info/form-info.component';
import { FormExperienceComponent } from './form-experience/form-experience.component';
import { FormFormationComponent } from './form-formation/form-formation.component';

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
    PickerModule
  ],
  providers: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
