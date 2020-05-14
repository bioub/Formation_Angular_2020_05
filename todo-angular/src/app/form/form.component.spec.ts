import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';

describe('FormComponent', () => {
  let nativeElement: HTMLElement;
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit one todo on submit', () => {
    const spy = jasmine.createSpy();

    // spy('ABC');

    // console.log(spy.calls.count()); // 1
    // console.log(spy.calls.argsFor(0)); // ['ABC']

    component.todo = {title: 'ABC', completed: false};
    fixture.detectChanges();

    component.add.subscribe(spy);

    const event = new Event('submit');
    nativeElement.querySelector('form').dispatchEvent(event);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.calls.argsFor(0)[0].title).toBe('ABC');
  });
});
