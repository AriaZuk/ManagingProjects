import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievemasterComponent } from './archievemaster.component';

describe('ArchievemasterComponent', () => {
  let component: ArchievemasterComponent;
  let fixture: ComponentFixture<ArchievemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchievemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchievemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
