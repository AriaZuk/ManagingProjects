import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeprojectmasterComponent } from './proposeprojectmaster.component';

describe('ProposeprojectmasterComponent', () => {
  let component: ProposeprojectmasterComponent;
  let fixture: ComponentFixture<ProposeprojectmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposeprojectmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeprojectmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
