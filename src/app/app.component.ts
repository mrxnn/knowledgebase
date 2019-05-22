import { Component } from '@angular/core';
import { CourseService } from './components/courses/course.service';
import { StudentService } from './components/students/student.service';
import { EmployeeService } from './components/employees/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public cs: CourseService, public ss: StudentService, public es: EmployeeService) {}
}
