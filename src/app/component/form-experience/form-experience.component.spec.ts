import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormExperienceComponent } from './form-experience.component';

describe('FormExperienceComponent', () => {
  let component: FormExperienceComponent;
  let fixture: ComponentFixture<FormExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
