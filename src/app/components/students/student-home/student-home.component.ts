import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  students: Observable<Student[]>;

  constructor(private afs: AngularFirestore, public ss: StudentService) {
    this.students = this.afs.collection<Student>('students').snapshotChanges().pipe(
      map(students => students.map(c => {
        const id = c.payload.doc.id;
        return { id, ...c.payload.doc.data() }
      }))
    );
  }

  ngOnInit() {
  }

  showUpdateForm(student: Student) {
    this.ss.displayUpdateForm = true;
    this.ss.selectedStudent.next(student);
  }
}
