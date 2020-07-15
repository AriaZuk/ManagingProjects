import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorsmasterComponent } from './supervisorsmaster.component';

describe('SupervisorsmasterComponent', () => {
  let component: SupervisorsmasterComponent;
  let fixture: ComponentFixture<SupervisorsmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorsmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorsmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
