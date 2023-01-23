import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChangComponent } from './language-chang.component';

describe('LanguageChangComponent', () => {
  let component: LanguageChangComponent;
  let fixture: ComponentFixture<LanguageChangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageChangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageChangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
