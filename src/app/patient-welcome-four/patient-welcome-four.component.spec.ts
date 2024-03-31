import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWelcomeFourComponent } from './patient-welcome-four.component';

describe('PatientWelcomeFourComponent', () => {
  let component: PatientWelcomeFourComponent;
  let fixture: ComponentFixture<PatientWelcomeFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientWelcomeFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientWelcomeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
