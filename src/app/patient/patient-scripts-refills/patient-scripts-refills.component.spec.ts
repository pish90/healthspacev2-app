import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientScriptsRefillsComponent } from './patient-scripts-refills.component';

describe('PatientScriptsRefillsComponent', () => {
  let component: PatientScriptsRefillsComponent;
  let fixture: ComponentFixture<PatientScriptsRefillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientScriptsRefillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientScriptsRefillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
