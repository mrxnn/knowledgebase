import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LibraryComponent } from './components/library/library.component';
import { FinanceComponent } from './components/finance/finance.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: 'students', component: StudentsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'library', component: LibraryComponent },
      { path: 'finance', component: FinanceComponent },
      { path: 'courses', component: CoursesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
