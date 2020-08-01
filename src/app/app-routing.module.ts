import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { SkillsComponent } from './skills/skills.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
    { path: "contactdetails", component: ContactDetailsComponent },
    { path: "personaldetails", component: PersonalDetailsComponent },
    { path: "skills", component: SkillsComponent },
    { path: "wizardfinished", component: WizardFinishedComponent },
    { path: "workexperience", component: WorkExperienceComponent },
    { path: "", redirectTo: "personaldetails", pathMatch: "full"}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }