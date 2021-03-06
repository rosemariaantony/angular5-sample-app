import { OnInit, ViewEncapsulation } from '@angular/core';
import { Component, Injectable } from '@angular/core';
import {
  NgbDateAdapter,
  NgbDateStruct,
  NgbDateParserFormatter,
  NgbModal,
  NgbActiveModal,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

export function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

export function isNumber(value: any): value is number {
  return !isNaN(toInteger(value));
}

export function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}
@Injectable()
export class MyFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('-');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { year: toInteger(dateParts[0]), month: null, day: null };
      } else if (
        dateParts.length === 2 &&
        isNumber(dateParts[0]) &&
        isNumber(dateParts[1])
      ) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: null
        };
      } else if (
        dateParts.length === 3 &&
        isNumber(dateParts[0]) &&
        isNumber(dateParts[1]) &&
        isNumber(dateParts[2])
      ) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    return date
      ? `${isNumber(date.day) ? padNumber(date.day) : ''}-${
          isNumber(date.month) ? padNumber(date.month) : ''
        }-${date.year}`
      : '';
  }
}

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        border-radius: 0.25rem;
        display: inline-block;
        width: 2rem;
      }
      .custom-day:hover,
      .custom-day.focused {
        background-color: #e6e6e6;
      }
      .weekend {
        background-color: #f0ad4e;
        border-radius: 1rem;
        color: white;
      }
      .hidden {
        display: none;
      }
    `
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: MyFormatter },
    NgbActiveModal
  ]
})
export class PopoverComponent implements OnInit {
  model: NgbDateStruct;
  modalReference: NgbModalRef;
  hoveredDate: string;
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
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {}
  openWindowCustomClass(content) {
    this.modalReference = this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'sm',
      centered: true
    });
  }
  closeModal() {
    this.modalReference.close('Modal Closed');
  }

  isHovered(date: NgbDate) {
    console.log(date + 'hi');
    this.hoveredDate = date.toString();
  }
}
