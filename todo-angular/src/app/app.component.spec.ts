import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TodoService } from './todo.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FormComponent, ListComponent, ItemComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: TodoService,
          useValue: {
            getAll() {
              return of([
                { id: 123, title: 'ABC', completed: false },
                { id: 456, title: 'DEF', completed: true },
                { id: 789, title: 'GHI', completed: false },
              ]);
            },
          },
        },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should receive todos from backend', () => {
  //   const httpTestingController = TestBed.inject(HttpTestingController);

  //   const fixture = TestBed.createComponent(AppComponent);
  //   httpTestingController.expectOne('https://jsonplaceholder.typicode.com/todos')
  //     .flush([
  //       { id: 123, title: 'ABC', completed: false },
  //       { id: 456, title: 'DEF', completed: true },
  //       { id: 789, title: 'GHI', completed: false },
  //     ]);
  //   fixture.detectChanges();
  //   const app = fixture.componentInstance;
  //   app.ngOnInit();
  //   expect(app.todos.length).toBe(5);

  //   httpTestingController.verify();
  // });
  it('should receive todos from backend', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.todos.length).toBe(5);
  });

  // it(`should have as title 'todo-angular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('todo-angular');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('todo-angular app is running!');
  // });
});
