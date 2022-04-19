import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffgetComponent } from './staffget.component';

describe('StaffgetComponent', () => {
  let component: StaffgetComponent;
  let fixture: ComponentFixture<StaffgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});