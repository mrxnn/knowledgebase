import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  displayForm: boolean;
  displayUpdateForm: boolean;
  selectedStudent = new BehaviorSubject<Student>({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    phone: '',
    nic: '',
    guardianName: '',
    guardianPhone: ''
  });
  
  constructor() { }
}
