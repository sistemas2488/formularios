import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularior6Component } from './formularior6.component';

describe('Formularior6Component', () => {
  let component: Formularior6Component;
  let fixture: ComponentFixture<Formularior6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formularior6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formularior6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
