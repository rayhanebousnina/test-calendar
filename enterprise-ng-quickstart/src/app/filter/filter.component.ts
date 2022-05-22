import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public model = {
    start: '01/01/2019',
    end: '01/02/2019',
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

  ngOnInit(): void {}

  onSave() {
    this.filterService.setFilterData(this.model);
  }
}
