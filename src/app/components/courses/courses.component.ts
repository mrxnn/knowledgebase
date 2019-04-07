import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  constructor(public cs: CourseService) { }

  ngOnInit() {
  }

  onAddCourseButtonClicked() {
    this.cs.displayForm = true;
  }
}
