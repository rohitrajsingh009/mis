import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeforeLoginComponent } from './before-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LanguageChangComponent } from './language-chang/language-chang.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 // { path: '', component: BeforeLoginComponent },
  {path:'',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'language',component:LanguageChangComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeforeLoginRoutingModule { }
