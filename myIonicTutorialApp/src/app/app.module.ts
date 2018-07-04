import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { UiComponentsComponent } from './ui-components/ui-components.component';
import { ApiDetailsComponent } from './api-details/api-details.component';
import { NativeAPIComponent } from './native-api/native-api.component';
import { ThemingPageComponent } from './theming-page/theming-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    UiComponentsComponent,
    ApiDetailsComponent,
    NativeAPIComponent,
    ThemingPageComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'intro-page', component: IntroPageComponent },
      { path: 'ui-components', component: UiComponentsComponent },
      { path: 'api-details', component: ApiDetailsComponent },
      { path: 'native-api', component: NativeAPIComponent },
      { path: 'theming-page', component: ThemingPageComponent },
      { path: '', component: WelcomePageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
