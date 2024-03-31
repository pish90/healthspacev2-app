import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWelcomeTwoComponent } from './patient-welcome-two.component';

describe('PatientWelcomeTwoComponent', () => {
  let component: PatientWelcomeTwoComponent;
  let fixture: ComponentFixture<PatientWelcomeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientWelcomeTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientWelcomeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
