import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from './course.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  displayForm: boolean;
  displayUpdateForm: boolean;
  selectedCourse = new BehaviorSubject<Course>({
    title: '',
    description: '',
    level: '',
    maxStudents: 0,
    audience: '',
    currentStudents: 0,
    duration: 0
  });
  
  constructor() { }
}
