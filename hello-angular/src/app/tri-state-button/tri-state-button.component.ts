import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tri-state-button",
  templateUrl: "./tri-state-button.component.html",
  styleUrls: ["./tri-state-button.component.css"],
})
export class TriStateButtonComponent implements OnInit {
  @Input() values = ["Oui", "Non", "Peut-être"];
  @Input() selected: string;

  @Output() selectedChange = new EventEmitter<string>(); // Generic

  selectedIndex = 0;

  constructor() {
    console.log("constructor", this.values);
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.values);

    if (!this.selected) {
      return;
    }

    if (!this.values.includes(this.selected)) {
      throw new Error(`Values ${this.values} don't include ${this.selected}`);
    }

    this.selectedIndex = this.values.indexOf(this.selected);
  }

  next() {
    this.selectedIndex = (this.selectedIndex + 1) % this.values.length;
    this.selectedChange.emit(this.values[this.selectedIndex]);
  }
}
