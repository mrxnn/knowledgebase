import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NotificationService } from '../../../notification/notification.service';

@Component({
  selector: 'app-course-update-form',
  templateUrl: './course-update-form.component.html',
  styleUrls: ['./course-update-form.component.scss']
})
export class CourseUpdateFormComponent implements OnInit {

  constructor(public cs: CourseService, private afs: AngularFirestore, private router: Router, private ns: NotificationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.afs.collection('courses').doc(form.value.id).set(form.value);
    this.cs.displayUpdateForm = false;
    this.ns.broadcast({content: 'Course Updated'});
  }

  onView(courseId: string) {
    this.router.navigate(['/dashboard/courses', courseId]);
    this.cs.displayUpdateForm = false;
  }
  
  onRemove(courseId: string) {
    this.afs.collection('courses').doc(courseId).delete();
    this.cs.displayUpdateForm = false;
    this.ns.broadcast({content: 'Course Removed'});
  }
}
