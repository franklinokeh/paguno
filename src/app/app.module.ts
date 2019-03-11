import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AddAccountComponent } from './pages/add-account/add-account.component';
import { LandingComponent } from './pages/landing/landing.component';
import { OTPComponent } from './pages/otp/otp.component';
import { SelectNameComponent } from './pages/select-name/select-name.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { CompleteComponent } from './pages/complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    LandingComponent,
    OTPComponent,
    SelectNameComponent,
    ConfirmationComponent,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
