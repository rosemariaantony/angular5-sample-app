import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.scss']
})
export class BootstrapTableComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
