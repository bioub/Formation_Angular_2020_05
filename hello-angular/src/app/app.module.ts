import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { HelloComponent } from './hello/hello.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HelloComponent,
    CitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
