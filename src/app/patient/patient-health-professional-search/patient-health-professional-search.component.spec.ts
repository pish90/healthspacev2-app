import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthProfessionalSearchComponent } from './patient-health-professional-search.component';

describe('PatientHealthProfessionalSearchComponent', () => {
  let component: PatientHealthProfessionalSearchComponent;
  let fixture: ComponentFixture<PatientHealthProfessionalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientHealthProfessionalSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientHealthProfessionalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
