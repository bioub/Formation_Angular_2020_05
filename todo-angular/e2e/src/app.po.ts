import { browser, by, element, WebElement } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  // getTitleText(): Promise<string> {
  //   return element(by.css('todo-root .content span')).getText() as Promise<string>;
  // }

  getTodoCount() {
    return element(by.css('todo-root')).all(by.css('todo-item')).count();
  }

  getFirstTodoText(): Promise<string> {
    return element(by.css('todo-root todo-item:first-child')).getText() as Promise<string>;
  }

  fillTodoField(text: string) {
    element(by.css('form input')).sendKeys(text);
  }

  submitForm() {
    element(by.css('form')).submit();
  }
}
