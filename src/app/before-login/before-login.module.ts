import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { BeforeLoginComponent } from './before-login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';


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
    BeforeLoginRoutingModule,
    FormsModule,HttpClientModule,TranslateModule
  ]
})
export class BeforeLoginModule { }
