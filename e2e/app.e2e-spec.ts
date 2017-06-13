import { AvamGuiPage } from './app.po';

describe('avam-gui App', () => {
  let page: AvamGuiPage;

  beforeEach(() => {
    page = new AvamGuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
