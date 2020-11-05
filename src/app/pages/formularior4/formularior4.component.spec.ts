import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularior4Component } from './formularior4.component';

describe('Formularior4Component', () => {
  let component: Formularior4Component;
  let fixture: ComponentFixture<Formularior4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formularior4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formularior4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
