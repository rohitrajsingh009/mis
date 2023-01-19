import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterLoginRoutingModule } from './after-login-routing.module';
import { AfterLoginComponent } from './after-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AfterLoginComponent,
    ChangePasswordComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AfterLoginRoutingModule
  ]
})
export class AfterLoginModule { }
