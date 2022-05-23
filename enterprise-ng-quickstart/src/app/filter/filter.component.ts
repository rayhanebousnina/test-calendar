import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  private unsubscribe = new Subject<void>();

  private disableValues: any = [];
  public disableOptions: SohoDatePickerDisable = {
    dayOfWeek: [],
  };

  public model = {
    start: '02/01/2019',
    end: '02/20/2019',
    checkBox1Value: true,
    checkBox2Value: true,
    checkBox3Value: true,
    checkBox4Value: true,
    checkBox5Value: true,
    checkBox6Value: true,
    checkBox7Value: true,
  };
  checkBoxIds = [
    'checkBox1',
    'checkBox2',
    'checkBox3',
    'checkBox4',
    'checkBox5',
    'checkBox6',
    'checkBox7',
  ];
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    //Subscribe to get the filter data
    this.filterService.filterData$
      //Unsubscribe to reduce the memory consumption
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data) => {
        let checkBoxArr = Object.values(data).splice(2, 7);
        this.disableValues = [];
        for (let i = 0; i < checkBoxArr.length; i++) {
          checkBoxArr[i] == false ? this.disableValues.push(i) : null;
        }
        this.disableOptions = { dayOfWeek: this.disableValues };
      });
  }

  /**
   * Pass the model to the RxJs Stream
   */
  onSave() {
    this.filterService.setFilterData(this.model);
  }

  //Unsubscribe on destroy life cycle hook
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
