import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-dynamic-slider',
  templateUrl: './dynamic-slider.component.html',
  styleUrls: ['./dynamic-slider.component.scss']
})
export class DynamicSliderComponent implements OnInit {
  value = 5;
  options: Options = {
    showSelectionBar: true,
    showTicksValues: true,
    floor: 1,
    ceil: 5,
    // translate: (value: number): string => {
    //   return '0' + value;
    // },

    showTicks: true,
    getLegend: (value: number): string => {
      return '0' + value;
    },
    getSelectionBarColor: (value: number): string => {
      if (value <= 2) {
          return 'red';
      }
      if (value <= 3) {
          return 'orange';
      }
      if (value <= 5) {
          return 'yellow';
      }
      return 'black';
    }
  };
  constructor() { }

  ngOnInit() {
  }


}
