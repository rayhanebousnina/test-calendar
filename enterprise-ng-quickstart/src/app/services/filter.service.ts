import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public filterData$: Subject<any> = new Subject();

  public setFilterData(value: any) {
    this.filterData$.next(value);
  }
}
