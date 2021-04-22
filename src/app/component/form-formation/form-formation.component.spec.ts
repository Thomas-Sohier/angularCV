import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormFormationComponent } from './form-formation.component';

describe('FormFormationComponent', () => {
  let component: FormFormationComponent;
  let fixture: ComponentFixture<FormFormationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
