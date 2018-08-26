import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeCustomerAssetComponent } from './ge-customer-asset.component';

describe('GeCustomerAssetComponent', () => {
  let component: GeCustomerAssetComponent;
  let fixture: ComponentFixture<GeCustomerAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeCustomerAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeCustomerAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
