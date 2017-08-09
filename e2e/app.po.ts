import { browser, by, element } from 'protractor';

export class JengularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jnex-root h1')).getText();
  }
}
