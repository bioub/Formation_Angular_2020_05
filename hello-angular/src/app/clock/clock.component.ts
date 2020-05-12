import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges, DoCheck } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"],
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  now = new Date();
  @Input() delay = 1000;

  aCocher = true;

  private interval;

  constructor() {
    // now = new Date(); s'est déjà exécuté
  }

  ngOnInit(): void {
    // appelé un peu après le constructeur
    this.interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.delay.firstChange) {
      return;
    }
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  ngDoCheck() {
    console.log('detectChanges Clock');
  }
}
