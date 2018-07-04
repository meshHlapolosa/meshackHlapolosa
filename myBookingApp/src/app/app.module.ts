import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { MyLoginPageComponent } from './my-login-page/my-login-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';

//const appRoutes: Routes = [
  //{ path: '/sign-up', component: SignUpComponent },

//];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MyLoginPageComponent,
    BookingPageComponent,
    ViewHotelsComponent,
    AddServicesComponent,
    ConfirmPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'sign-up', component: SignUpComponent },
      { path: 'my-login-page', component: MyLoginPageComponent },
      { path: 'booking-page', component: BookingPageComponent },
      { path: 'view-hotels', component: ViewHotelsComponent },
      { path: 'add-services', component: AddServicesComponent },
      { path: 'confirm-page', component: ConfirmPageComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
