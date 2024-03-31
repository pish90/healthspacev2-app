import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWelcomeThreeComponent } from './patient-welcome-three.component';

describe('PatientWelcomeThreeComponent', () => {
  let component: PatientWelcomeThreeComponent;
  let fixture: ComponentFixture<PatientWelcomeThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientWelcomeThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientWelcomeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
