import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgmDirectionModule } from 'agm-direction';
import { ApplicationLauncherModule, ToastNotificationModule } from 'patternfly-ng';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component.';
import { VoteComponent } from './vote/vote.component';




@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    ResultComponent
  ],
  imports: [
    ApplicationLauncherModule,
    ToastNotificationModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
