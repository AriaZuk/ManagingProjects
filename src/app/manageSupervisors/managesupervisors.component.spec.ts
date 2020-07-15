import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesupervisorsComponent } from './managesupervisors.component';

describe('ManagesupervisorsComponent', () => {
  let component: ManagesupervisorsComponent;
  let fixture: ComponentFixture<ManagesupervisorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesupervisorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesupervisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
