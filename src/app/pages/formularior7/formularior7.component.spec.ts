import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularior7Component } from './formularior7.component';

describe('Formularior7Component', () => {
  let component: Formularior7Component;
  let fixture: ComponentFixture<Formularior7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formularior7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formularior7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
