import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormComponent } from './form/form.component';
import { InfosComponent } from './infos/infos.component';
import { LanguageComponent } from './language/language.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FormInfoComponent } from './form-info/form-info.component';
import { FormExperienceComponent } from './form-experience/form-experience.component';
import { FormFormationComponent } from './form-formation/form-formation.component';
import { InputFileComponent } from './input-file/input-file.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CvComponent,
    ExperienceComponent,
    FormComponent,
    FormFormationComponent,
    FormExperienceComponent,
    FormInfoComponent,
    FormationComponent,
    InfosComponent,
    HobbiesComponent,
    InputFileComponent,
    LanguageComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
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
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule,
    MatSelectModule
  ],
  exports: [
    CvComponent,
    ExperienceComponent,
    FormComponent,
    FormFormationComponent,
    FormExperienceComponent,
    FormInfoComponent,
    FormationComponent,
    InfosComponent,
    HobbiesComponent,
    InputFileComponent,
    LanguageComponent,
    SkillsComponent
  ]
})
export class ComponentModule {}
