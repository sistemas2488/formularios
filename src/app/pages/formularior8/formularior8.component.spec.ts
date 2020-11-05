import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularior8Component } from './formularior8.component';

describe('Formularior8Component', () => {
  let component: Formularior8Component;
  let fixture: ComponentFixture<Formularior8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formularior8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formularior8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
