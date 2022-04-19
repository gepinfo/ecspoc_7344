import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentgetallComponent } from './studentgetall.component';

describe('StudentgetallComponent', () => {
  let component: StudentgetallComponent;
  let fixture: ComponentFixture<StudentgetallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentgetallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentgetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});