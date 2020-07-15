import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoursHomeComponent } from './honours-home.component';

describe('HonoursHomeComponent', () => {
  let component: HonoursHomeComponent;
  let fixture: ComponentFixture<HonoursHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HonoursHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HonoursHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
