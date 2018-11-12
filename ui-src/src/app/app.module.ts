import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule  } from '@agm/snazzy-info-window';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgmDirectionModule } from 'agm-direction';
import { ApplicationLauncherModule } from 'patternfly-ng';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { ErrorHandlerService } from './service/api.error-handler.service';
import { ApiService } from './service/api.service';
import { VoteComponent } from './vote/vote.component';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
export function init_app(apiService: ApiService) {
  console.log(`init_app:: inside`);
  return () => apiService.initializeApp();
}
@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    ResultComponent
  ],
  imports: [
    ApplicationLauncherModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqJJmddZYWipbXmwfAfiSb1gMXj8P6Jso'
    }),
    RouterModule.forRoot([
      { path: '', component: VoteComponent },
      { path: 'result', component: ResultComponent},
      { path: '**', redirectTo: '' }
    ]),
    AgmCoreModule,
    AgmDirectionModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerService, multi: true },
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    ApiService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ApiService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
