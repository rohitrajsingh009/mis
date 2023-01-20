import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  
  useLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
  }

}
