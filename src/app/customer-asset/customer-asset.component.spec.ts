import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAssetComponent } from './customer-asset.component';

describe('CustomerAssetComponent', () => {
  let component: CustomerAssetComponent;
  let fixture: ComponentFixture<CustomerAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
