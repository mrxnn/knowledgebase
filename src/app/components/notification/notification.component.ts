import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  content: string;
  show: boolean;

  constructor(public ns: NotificationService) { }

  ngOnInit() {
    this.ns.recentNotification.subscribe((n) => {
      if (n) {
        this.content = n.content;
        this.show = true;
        setTimeout(() => {
          this.content = '';
          this.show = false;
        }, 4000);
      }
    });
  }
}
