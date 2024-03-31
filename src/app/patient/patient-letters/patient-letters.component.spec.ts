import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLettersComponent } from './patient-letters.component';

describe('PatientLettersComponent', () => {
  let component: PatientLettersComponent;
  let fixture: ComponentFixture<PatientLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientLettersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
