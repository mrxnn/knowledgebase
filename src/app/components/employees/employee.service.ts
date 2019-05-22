import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  displayForm: boolean;
  displayUpdateForm: boolean;
  selectedEmployee = new BehaviorSubject<Employee>({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    phone: '',
    nic: '',
    basicSalary: 0,
    otHours: 0,
    otRate: 0
  });
  
  constructor() { }
}
