import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularior3Component } from './formularior3.component';

describe('Formularior3Component', () => {
  let component: Formularior3Component;
  let fixture: ComponentFixture<Formularior3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formularior3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formularior3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
