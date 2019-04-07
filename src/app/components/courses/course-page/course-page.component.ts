import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Course } from '../course.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  course: Observable<Course>;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {
    this.course = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.afs.doc<Course>(`courses/${id}`).snapshotChanges().pipe(
          map(course => {
            const id = course.payload.id;
            return { id, ...course.payload.data() }
          })
        );
      })
    );
  }
}
