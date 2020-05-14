import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('todo-angular app is running!');
  // });

  it('should display 202 todos', () => {
    page.navigateTo();
    expect(page.getTodoCount()).toBe(202);
  });

  it('should add new todo', () => {
    page.navigateTo();
    page.fillTodoField('Conclure la formation');
    page.submitForm();
    expect(page.getFirstTodoText()).toContain('Conclure la formation');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
