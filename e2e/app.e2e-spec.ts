import { JengularPage } from './app.po';

describe('jengular App', () => {
  let page: JengularPage;

  beforeEach(() => {
    page = new JengularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to jnex!');
  });
});
