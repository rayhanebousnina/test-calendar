import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  public model = {
    start: '01/01/2010',
    end: '01/02/2010',
    checkBox1Id: 'checkBox1',
    checkBox2Id: 'checkBox2',
    checkBox3Id: 'checkBox3',
    checkBox4Id: 'checkBox4',
    checkBox5Id: 'checkBox5',
    checkBox6Id: 'checkBox6',
    checkBox7Id: 'checkBox7',
    checkBox1Value: true,
    checkBox2Value: true,
    checkBox3Value: true,
    checkBox4Value: true,
    checkBox5Value: true,
    checkBox6Value: true,
    checkBox7Value: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
