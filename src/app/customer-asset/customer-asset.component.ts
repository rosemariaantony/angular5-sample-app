import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-asset',
  templateUrl: './customer-asset.component.html',
  styleUrls: ['./customer-asset.component.scss']
})
export class CustomerAssetComponent implements OnInit {
  softwares = ['RIS 5.2', 'EA', 'PAC'];
  selectedItem = 'RIS 5.2';
  isFilter = false;
  selectedTab = 'RIS 5.2';
  expandedRowId: string;
  osList = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' }
  ];

  tableData: any[] = [
    {
      id: 1,
      hostName: 'Earl of Lemongrab',
      IPNetwork: ['Unknown', 'etrey', 'reyey'],
      hostType: 'Lemon Candy',
      server: [
        {
          a: ' Thrfgdfhone',
          b: 'defg',
          c: 'erwet'
        }
      ],
      thirdPartySoftwares: 'sgdsgdg',
      changeRequests: 3,
      location: 'dfsds'
    },
    {
      id: 2,
      hostName: 'Earl of Lemongrab',
      IPNetwork: ['Unknown', 'etrey', 'reyey'],
      hostType: 'Lemon Candy',
      server: [{ a: ' Thrfgdfhone', b: 'defg', c: 'erwet' }],
      thirdPartySoftwares: 'sgdsgdg',
      changeRequests: 3,
      location: 'dfsds'
    },
    {
      id: 3,
      hostName: 'Earl of Lemongrab',
      IPNetwork: ['Unknown', 'etrey', 'reyey'],
      hostType: 'Lemon Candy',
      server: [{ a: ' Thrfgdfhone', b: 'defg', c: 'erwet' }],
      thirdPartySoftwares: 'sgdsgdg',
      changeRequests: 3,
      location: 'dfsds'
    },
    {
      id: 4,
      hostName: 'Earl of Lemongrab',
      IPNetwork: ['Unknown', 'etrey', 'reyey'],
      hostType: 'Lemon Candy',
      server: [{ a: ' Thrfgdfhone', b: 'defg', c: 'erwet' }],
      thirdPartySoftwares: 'sgdsgdg',
      changeRequests: 3,
      location: 'dfsds'
    }
  ];

  setSelectedItem(software) {
    this.selectedTab = software;
    this.selectedItem = software;
  }

  onClickExpand(id) {
    if (this.expandedRowId === id) {
      this.expandedRowId = null;
    } else {
      this.expandedRowId = id;
    }
  }
  constructor() {}

  ngOnInit() {}
}
