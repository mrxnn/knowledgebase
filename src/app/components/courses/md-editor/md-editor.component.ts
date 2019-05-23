import { Component, OnInit, Output, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.scss']
})
export class MdEditorComponent implements OnInit {
  @Input() content: string;
  @Output() contentChange = new EventEmitter();

  constructor(public cs: CourseService) { }

  ngOnInit() {
  }

  onPublish() {
    this.contentChange.emit(this.content);
    this.cs.displayMarkdownEditor = false;
  }
}
