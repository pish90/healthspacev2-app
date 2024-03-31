import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthProfessionalNotesComponent } from './patient-health-professional-notes.component';

describe('PatientHealthProfessionalNotesComponent', () => {
  let component: PatientHealthProfessionalNotesComponent;
  let fixture: ComponentFixture<PatientHealthProfessionalNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientHealthProfessionalNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientHealthProfessionalNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
