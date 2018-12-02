import { Component, OnInit, AfterViewInit } from '@angular/core';
// import {
//   ViewChildren,
//   QueryList,
//   ElementRef,
//   Renderer2,
//   ViewChild,
//   HostListener
// } from '@angular/core';

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

  // @ViewChildren('sourceTh')
  // sourceTh: QueryList<ElementRef>;

  // @ViewChildren('targetTh')
  // targetTh: QueryList<ElementRef>;

  // constructor(private renderer: Renderer2) {}

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.resizeColumns();
  // }

  // ngAfterViewInit() {
  //   // setTimeout(() => {
  //   this.resizeColumns();
  //   // }, 1000);
  // }

  // resizeColumns() {
  //   const widths = this.targetTh.map(th => th.nativeElement.offsetWidth);

  //   this.sourceTh.forEach((th, index) => {
  //     this.renderer.setStyle(th.nativeElement, 'min-width', `${widths[index]}px`);
  //     this.renderer.setStyle(th.nativeElement, 'max-width', `${widths[index]}px`);
  //   });
  // }

  ngOnInit() {}
}
