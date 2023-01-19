import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { BeforeLoginComponent } from './before-login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    BeforeLoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    BeforeLoginRoutingModule
  ]
})
export class BeforeLoginModule { }
