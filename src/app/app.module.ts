import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApplicationLauncherModule, ToastNotificationModule } from 'patternfly-ng';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApplicationLauncherModule,
    ToastNotificationModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5slsxmONLRZUBZGEfPaXRBwstRVykhuM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
