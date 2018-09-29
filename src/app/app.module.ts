import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
    AgmDirectionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerService, multi: true },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
