import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';


@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  courseId: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.courseId = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return of(id);
      })
    );
  }
}
