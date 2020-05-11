import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"],
})
export class ClockComponent implements OnInit {
  now = new Date();

  aCocher = true;

  constructor() {
    // now = new Date(); s'est déjà exécuté
  }

  ngOnInit(): void {
    // appelé un peu après le constructeur
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}