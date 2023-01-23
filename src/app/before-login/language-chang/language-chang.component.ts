import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-chang',
  templateUrl: './language-chang.component.html',
  styleUrls: ['./language-chang.component.scss']
})
export class LanguageChangComponent implements OnInit {

  
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
