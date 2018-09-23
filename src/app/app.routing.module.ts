import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { VoteComponent } from './app.vote';
import { ResultComponent } from './app.result';


@NgModule({
  declarations: [
    VoteComponent, ResultComponent,
  ],
  imports: [
    CommonModule,
    AgmCoreModule,
    AgmDirectionModule,
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
