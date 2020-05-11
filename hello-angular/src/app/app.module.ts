import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { HelloComponent } from './hello/hello.component';
import { CitySelectorComponent } from './city-selector/city-selector.component';
import { SelectComponent } from './select/select.component';
import { CounterComponent } from './counter/counter.component';
import { TriStateButtonComponent } from './tri-state-button/tri-state-button.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HelloComponent,
    CitySelectorComponent,
    SelectComponent,
    CounterComponent,
    TriStateButtonComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
