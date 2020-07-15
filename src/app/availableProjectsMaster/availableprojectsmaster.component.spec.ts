import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableprojectsmasterComponent } from './availableprojectsmaster.component';

describe('AvailableprojectsmasterComponent', () => {
  let component: AvailableprojectsmasterComponent;
  let fixture: ComponentFixture<AvailableprojectsmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableprojectsmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableprojectsmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
