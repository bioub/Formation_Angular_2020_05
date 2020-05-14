import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ItemComponent } from '../item/item.component';

describe('ListComponent', () => {
  let nativeElement: HTMLElement;
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, ItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    component.items = [
      { id: 123, title: 'ABC', completed: false },
      { id: 456, title: 'DEF', completed: true },
      { id: 789, title: 'GHI', completed: false },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains 3 todo-item', () => {
    expect(nativeElement.querySelectorAll('todo-item').length).toBe(3);
  });
});
