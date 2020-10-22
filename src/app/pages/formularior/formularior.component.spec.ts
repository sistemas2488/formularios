import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariorComponent } from './formularior.component';

describe('FormulariorComponent', () => {
  let component: FormulariorComponent;
  let fixture: ComponentFixture<FormulariorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
