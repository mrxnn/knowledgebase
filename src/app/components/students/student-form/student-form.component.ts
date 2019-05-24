import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Student } from '../student.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { NotificationService } from '../../../notification/notification.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  studentCollection: AngularFirestoreCollection<Student>;

  constructor(public ss: StudentService, private afs: AngularFirestore, private ns: NotificationService) { }

  ngOnInit() {
    this.studentCollection = this.afs.collection<Student>('students');
  }

  onSubmit(form: NgForm) {
    this.studentCollection.add(form.value);
    this.ss.displayForm = false;
    this.ns.broadcast({content: "Student Added"});
  }
}
