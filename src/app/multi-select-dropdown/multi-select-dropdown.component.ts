import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss']
})
export class MultiSelectDropdownComponent implements OnInit {
  peoples: { id: string; name: string; }[];

  constructor() { }

  ngOnInit() {
    this.peoples = [
      { id: '5a15b13c2340978ec3d2c0ea', name: 'Rochelle Estes'},
      { id: '5a15b13c728cd3f43cc0fe8a', name: 'Marquez Nolan'},
      { id: '5a15b13c23dd0978ec3d2c0ea', name: 'EZSachelle Estes'},
      { id: '5a15b13c728sadad3f43cc0fe8a', name: 'Anjkskjnquez Nolan'}
  ];
  }

}
