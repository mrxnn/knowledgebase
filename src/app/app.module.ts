import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentsComponent } from './components/students/students.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LibraryComponent } from './components/library/library.component';
import { FinanceComponent } from './components/finance/finance.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CoursePageComponent } from './components/courses/course-page/course-page.component';
import { CoursesHomeComponent } from './components/courses/courses-home/courses-home.component';
import { CourseFormComponent } from './components/courses/course-form/course-form.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { StudentPageComponent } from './components/students/student-page/student-page.component';
import { StudentHomeComponent } from './components/students/student-home/student-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CoursesComponent,
    StudentsComponent,
    EmployeesComponent,
    LibraryComponent,
    FinanceComponent,
    SidebarComponent,
    SearchbarComponent,
    CoursePageComponent,
    CoursesHomeComponent,
    CourseFormComponent,
    StudentFormComponent,
    StudentPageComponent,
    StudentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
