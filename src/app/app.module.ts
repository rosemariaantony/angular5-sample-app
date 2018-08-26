import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { GeCustomerAssetComponent } from './ge-customer-asset/ge-customer-asset.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerAssetComponent } from './customer-asset/customer-asset.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    GeCustomerAssetComponent,
    CustomerAssetComponent
  ],
  imports: [BrowserModule, FormsModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
