import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { CvComponent } from './component/cv/cv.component';
import { FormationComponent } from './component/formation/formation.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { FormComponent } from './component/form/form.component';
import { FormsModule } from '@angular/forms';
import { InfosComponent } from './component/infos/infos.component';
import { LanguageComponent } from './component/language/language.component';
import { SkillsComponent } from './component/skills/skills.component';
import { HobbiesComponent } from './component/hobbies/hobbies.component';
import { FormInfoComponent } from './component/form-info/form-info.component';
import { FormExperienceComponent } from './component/form-experience/form-experience.component';
import { FormFormationComponent } from './component/form-formation/form-formation.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InputFileComponent } from './component/input-file/input-file.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr-FR');

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
    FormFormationComponent,
    InputFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
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
