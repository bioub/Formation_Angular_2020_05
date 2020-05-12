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
    <app-counter></app-counter>

    <!--<app-tri-state-button selected="Maybe" [values]="['Yes', 'No', 'Maybe']"></app-tri-state-button>-->
  
    <app-tri-state-button [selected]="choice" [values]="choices" (selectedChange)="choice = $event"></app-tri-state-button>

    <!--
    inputEl.addEventListener('input', ($event) => {
      if ($event.target.value === 'Romain') {
        const eventRomain = new Event('romain');
        inputEl.dispatchEvent(eventRomain);
      }
    });
    -->

    <!--<input [value]="choice" (input)="choice = $event.target.value" />-->

    <p>Vous avez choisi : {{choice}}</p>

    <h2>Exercice</h2>
    <app-select></app-select>
  `,
  styles: []
})
export class AppComponent {
  choice = 'No';
  choices = ['Yes', 'No', 'Maybe'];
}
