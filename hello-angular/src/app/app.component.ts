import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Horloge</h2>
    <app-clock></app-clock>

    <h2>Hello</h2>
    <app-hello></app-hello>

    <h2>Exercice</h2>
    <app-city-selector></app-city-selector>
  `,
  styles: []
})
export class AppComponent {

}
