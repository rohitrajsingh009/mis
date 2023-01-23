import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { BeforeLoginComponent } from './before-login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageChangComponent } from './language-chang/language-chang.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    BeforeLoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ForgotPasswordComponent,
    LanguageChangComponent
  ],
  imports: [
    CommonModule,
    BeforeLoginRoutingModule,
    FormsModule,HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
        loader: {
          provide: TranslateLoader,
          useFactory:  (createTranslateLoader),//HttpLoaderFactory,//
          deps: [HttpClient]
      }
    })
  ]
})
export class BeforeLoginModule { }
