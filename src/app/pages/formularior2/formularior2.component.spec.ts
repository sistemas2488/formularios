import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularior2Component } from './formularior2.component';

describe('Formularior2Component', () => {
  let component: Formularior2Component;
  let fixture: ComponentFixture<Formularior2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formularior2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formularior2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
