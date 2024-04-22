import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProfessionalComponent } from './health-professional.component';

describe('HealthProfessionalComponent', () => {
  let component: HealthProfessionalComponent;
  let fixture: ComponentFixture<HealthProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthProfessionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
