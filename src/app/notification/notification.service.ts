import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  recentNotification = new BehaviorSubject({
    content: 'App started'
  });

  constructor() { }

  broadcast(notification) {
    this.recentNotification.next(notification);
  }
}
