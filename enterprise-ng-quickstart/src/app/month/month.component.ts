import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import { SohoCalendarComponent, SohoToastService } from 'ids-enterprise-ng';
import * as moment from 'moment';
import { Subject, takeUntil } from 'rxjs';
import { IEvents } from '../models/events.model';
import { IEventType } from '../models/eventTypes.model';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-month',
  templateUrl: 'month.component.html',
})
export class MonthComponent implements OnInit {
  @HostBinding('style.overflow') overflow = 'auto';
  @HostBinding('style.height') height = 'auto';
  @HostBinding('style.display') block = 'block';

  @ViewChild(SohoCalendarComponent)
  sohoCalendarComponent?: SohoCalendarComponent;

  private unsubscribe = new Subject<void>();
  public initialMonth = 1;
  public initialYear = 2019;
  public showViewChanger = true;
  public disable: any = { dayOfWeek: [0, 6] };
  public datePickerStartValue: any;
  public datePickerEndValue: any;
  public disableValues: any = [];

  public eventTypes?: Array<IEventType> = [
    {
      id: 'dto',
      label: 'Infor',
      translationKey: 'Infor',
      color: 'azure',
      checked: true,
    },
  ];
  public events: Array<IEvents> = [
    {
      id: '7',
      subject: '',
      comments: '',
      status: 'Approved',
      starts: '2019-02-02T16:00:00.999',
      ends: '2019-02-15T18:00:00.999',
      type: 'dto',
      isAllDay: 'true',
    },
  ];
  public iconTooltip = 'status';
  public eventTooltip = 'comments';

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    // Subscribe to get the filter data
    this.filterService.filterData$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        // console.log('Subjects data sent from the filter component', data);
        this.datePickerStartValue = data.start;
        this.datePickerEndValue = data.end;
        // Update the value of the events with new start and end dates
        this.events = [
          {
            id: '7',
            subject: '',
            comments: '',
            status: 'Approved',
            starts:
              moment(this.datePickerStartValue).format().slice(0, -6) + '.999',
            ends:
              moment(this.datePickerEndValue).format().slice(0, -6) + '.999',
            type: 'dto',
            isAllDay: 'true',
          },
        ];
        // let checkBoxArr = Object.values(data).splice(2, 7);
        // for (let i = 0; i < checkBoxArr.length; i++) {
        //   checkBoxArr[i] == false ? this.disableValues.push(i) : null;
        // }

        // this.disable = { dayOfWeek: this.disableValues };
      });
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
