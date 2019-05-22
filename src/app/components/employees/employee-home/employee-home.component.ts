import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmployeeService } from '../employee.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(private afs: AngularFirestore, public es: EmployeeService) {
    this.employees = this.afs.collection<Employee>('employees').snapshotChanges().pipe(
      map(employees => employees.map(c => {
        const id = c.payload.doc.id;
        return { id, ...c.payload.doc.data() }
      }))
    );
  }

  ngOnInit() {
  }

  showUpdateForm(employee: Employee) {
    this.es.displayUpdateForm = true;
    this.es.selectedEmployee.next(employee);
  }
}
