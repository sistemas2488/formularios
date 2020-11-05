import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularior5Component } from './formularior5.component';

describe('Formularior5Component', () => {
  let component: Formularior5Component;
  let fixture: ComponentFixture<Formularior5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formularior5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formularior5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
