import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from '../course.model';
import { map } from 'rxjs/operators';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-home',
  templateUrl: './courses-home.component.html',
  styleUrls: ['./courses-home.component.scss']
})
export class CoursesHomeComponent implements OnInit {
  courses: Observable<Course[]>;

  constructor(private afs: AngularFirestore, public cs: CourseService) { }

  ngOnInit() {
    this.courses = this.afs.collection<Course>('courses').snapshotChanges().pipe(
      map(courses => courses.map(c => {
        const id = c.payload.doc.id;
        return { id, ...c.payload.doc.data() }
      }))
    );
  }

  showUpdateForm(course: Course) {
    this.cs.displayUpdateForm = true;
    this.cs.selectedCourse.next(course);
  }
}
