import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthProfessionalListComponent } from './patient-health-professional-list.component';

describe('PatientHealthProfessionalListComponent', () => {
  let component: PatientHealthProfessionalListComponent;
  let fixture: ComponentFixture<PatientHealthProfessionalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientHealthProfessionalListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientHealthProfessionalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
