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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContactService } from './contacts/shared/contact.service';
import { providers } from './providers';
// import { HttpClientModule, HttpClientJsonpModule, HttpClientXsrfModule } from '@angular/common/http';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule, // défini le provider de Title
    HttpClientModule, // défini le provider de HttpClient
    ContactsModule,
    AppRoutingModule, // ! déclare la route ** pour les NotFound
    SharedModule, // import les composants/directives/pipes exportés pour les rendre accessibles
    // dans les templates de ce module (ici AppComponent)
  ],
  providers: providers, // BUG @angular/cli
  bootstrap: [AppComponent],
})
export class AppModule { }
