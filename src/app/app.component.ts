import { Component } from '@angular/core';
import { CourseService } from './components/courses/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public cs: CourseService) {}
}
