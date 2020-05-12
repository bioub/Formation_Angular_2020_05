import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Horloge</h2>
    <app-clock *ngIf="showClock" [delay]="delay"></app-clock>
    <button (click)="showClock = !showClock">{{showClock ? 'Hide' : 'Show'}}</button>
    <button (click)="delay = delay + 1000">+1000</button>
    <button (click)="delay = delay - 1000">-1000</button>

    <h2>Hello</h2>
    <app-hello></app-hello>

    <h2>Exercice</h2>
    <app-city-selector></app-city-selector>
    <app-counter></app-counter>

    <!--<app-tri-state-button selected="Maybe" [values]="['Yes', 'No', 'Maybe']"></app-tri-state-button>-->
  
    <app-tri-state-button [values]="choices" [selected]="choice" (selectedChange)="choice = $event"></app-tri-state-button>

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
    <!--<app-select 
      [items]="choices"
      [selected]="choice"
      (selectedChange)="choice = $event"
    >
    </app-select>-->
    <app-select 
      [items]="choices"
      [(selected)]="choice"
    >
    </app-select>


    <h2>Tabs</h2>
    <app-tabs>
      <app-tab title="Onglet 1">Contenu onglet 1</app-tab>
      <app-tab title="Onglet 2">Contenu onglet 2</app-tab>
      <app-tab title="Onglet 3">Contenu onglet 3</app-tab>
      <app-tab title="Onglet 4">Contenu onglet 4</app-tab>
    </app-tabs>
  `,
  styles: []
})
export class AppComponent {
  choice = 'No';
  choices = ['Yes', 'No', 'Maybe'];

  showClock = true;

  delay = 1000;
}
