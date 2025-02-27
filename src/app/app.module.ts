import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftSideComponent } from '../left-side/left-side.component';
import { RightSideComponent } from '../right-side/right-side.component';

@NgModule({
  declarations: [AppComponent, LeftSideComponent, RightSideComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
