import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    AppRoutingModule, // ! déclare la route ** pour les NotFound
    SharedModule, // import les composants/directives/pipes exportés pour les rendre accessibles
    // dans les templates de ce module (ici AppComponent)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
