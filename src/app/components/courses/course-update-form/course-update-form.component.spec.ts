import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUpdateFormComponent } from './course-update-form.component';

describe('CourseUpdateFormComponent', () => {
  let component: CourseUpdateFormComponent;
  let fixture: ComponentFixture<CourseUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
