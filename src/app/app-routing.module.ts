import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddAccountComponent } from './pages/add-account/add-account.component';
import { LandingComponent } from './pages/landing/landing.component';
import { OTPComponent } from './pages/otp/otp.component';
import { SelectNameComponent } from './pages/select-name/select-name.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { Location } from '@angular/common';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'add-account',
    component: AddAccountComponent
  },
  {
    path: 'add-account/enter-otp',
    component: OTPComponent
  },
  {
    path: 'add-account/enter-otp/select-name',
    component: SelectNameComponent
  },
  {
    path: 'add-account/enter-otp/select-name/confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'add-account/enter-otp/select-name/confirmation/complete',
    component: CompleteComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private location: Location) {
  }

  goBack() {
    // window.history.back();
    this.location.back();

    console.log('goBack()...');
  }

}
