import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { VoteComponent } from './app.vote';
import { ResultComponent } from './app.result';


@NgModule({
  declarations: [
    VoteComponent, ResultComponent,
  ],
  imports: [
    CommonModule,
    AgmCoreModule,
    RouterModule.forRoot([
      { path: '', component: VoteComponent },
      { path: 'result', component: ResultComponent},
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
