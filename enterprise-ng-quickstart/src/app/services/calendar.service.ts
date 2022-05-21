import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEventType } from '../models/eventTypes.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  public getCalendarEventTypes(): Observable<any> {
    return this.http.get('assets/eventTypes.json');
  }

  public getCalendarEvents(): Observable<any> {
    return this.http.get('assets/events.json');
  }
}
