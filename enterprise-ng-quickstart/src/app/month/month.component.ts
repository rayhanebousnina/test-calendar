import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import { SohoCalendarComponent, SohoToastService } from 'ids-enterprise-ng';
import { IEventType } from '../models/eventTypes.model';
import { CalendarService } from '../services/calendar.service';
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

  public initialMonth = 1;
  public initialYear = 2019;
  public showViewChanger = true;
  public disable: any;
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
  start = '2019-02-02T16:00:00.999';
  end = '2019-02-15T18:00:00.999';
  public events: any = [
    {
      id: '7',
      subject: '',
      comments: '',
      status: 'Approved',
      starts: this.start,
      ends: this.end,
      type: 'dto',
      isAllDay: 'true',
    },
  ];
  public iconTooltip = 'status';
  public eventTooltip = 'comments';

  constructor(
    private calendarService: CalendarService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.filterService.filterData$.subscribe((data) => {
      console.log('Subjects data sent from the filter component', data);
      this.datePickerStartValue = data.start;
      this.datePickerEndValue = data.end;
      let checkBoxArr = Object.values(data).splice(2, 7);
      for (let i = 0; i < checkBoxArr.length; i++) {
        checkBoxArr[i] == false ? this.disableValues.push(i) : null;
      }

      this.disable = { dayOfWeek: this.disableValues };
    });
  }
}
