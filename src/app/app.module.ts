import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { GeCustomerAssetComponent } from './ge-customer-asset/ge-customer-asset.component';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAssetComponent } from './customer-asset/customer-asset.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationGridComponent } from './configuration-grid/configuration-grid.component';
import { PopoverComponent } from './popover/popover.component';
import { DatePipe } from '@angular/common';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { MyTestComponent } from './my-test/my-test.component';
import { DynamicSliderComponent } from './dynamic-slider/dynamic-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    GeCustomerAssetComponent,
    CustomerAssetComponent,
    ConfigurationGridComponent,
    PopoverComponent,
    BootstrapTableComponent,
    MultiSelectDropdownComponent,
    MyTestComponent,
    DynamicSliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgSelectModule,
    Ng5SliderModule
  ],
  providers: [ NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule {}
