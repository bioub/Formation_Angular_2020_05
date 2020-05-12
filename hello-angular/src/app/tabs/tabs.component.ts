import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  titles: string[];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.titles = Array.from(this.tabs).map((t) => t.title);
  }

}
