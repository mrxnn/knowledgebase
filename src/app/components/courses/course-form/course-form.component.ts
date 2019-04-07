import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  coursesCollection: AngularFirestoreCollection<Course>;

  constructor(public cs: CourseService, private afs: AngularFirestore) { }

  ngOnInit() {
    this.coursesCollection = this.afs.collection<Course>('courses');
  }

  onSubmit(form: NgForm) {
    this.coursesCollection.add(form.value);
    this.cs.displayForm = false;
  }
}
