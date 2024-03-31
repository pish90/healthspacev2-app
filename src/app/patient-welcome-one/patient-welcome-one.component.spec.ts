import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWelcomeOneComponent } from './patient-welcome-one.component';

describe('PatientWelcomeOneComponent', () => {
  let component: PatientWelcomeOneComponent;
  let fixture: ComponentFixture<PatientWelcomeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientWelcomeOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientWelcomeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
