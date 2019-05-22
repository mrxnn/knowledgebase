import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-update-form',
  templateUrl: './student-update-form.component.html',
  styleUrls: ['./student-update-form.component.scss']
})
export class StudentUpdateFormComponent implements OnInit {
  constructor(public ss: StudentService, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.afs.collection('students').doc(form.value.id).set(form.value);
    this.ss.selectedStudent.next(null);
    this.ss.displayUpdateForm = false;
  }

  onRemove(studentId: string) {
    this.afs.collection('students').doc(studentId).delete();
    this.ss.selectedStudent.next(null);
    this.ss.displayUpdateForm = false;
  }
}
