import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Course } from '../course.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { CourseService } from '../course.service';
import { NotificationService } from '../../../notification/notification.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  course: Observable<Course>;
  courseId: string;
  markdownContent: string;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, public cs: CourseService, private ns: NotificationService) { }

  ngOnInit() {
    this.course = this.route.paramMap.pipe(
      tap(params => this.courseId = params.get('id')),
      switchMap(params => {
        const id = params.get('id');
        return this.afs.doc<Course>(`courses/${id}`).snapshotChanges().pipe(
          map(course => {
            const id = course.payload.id;
            this.markdownContent = course.payload.data().mdContent;
            return { id, ...course.payload.data() }
          })
        );
      })
    );
  }

  onMdContentChanged(content: string) {
    this.afs.collection('courses').doc(this.courseId).update({
      mdContent: content
    });
    this.markdownContent = content;

    this.ns.broadcast({ content: 'Markdown Updated' });
  }
}
