import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { GeCustomerAssetComponent } from './ge-customer-asset/ge-customer-asset.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAssetComponent } from './customer-asset/customer-asset.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationGridComponent } from './configuration-grid/configuration-grid.component';
import { PopoverComponent } from './popover/popover.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    GeCustomerAssetComponent,
    CustomerAssetComponent,
    ConfigurationGridComponent,
    PopoverComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
