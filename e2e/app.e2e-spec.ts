import { BitirmeAppPage } from './app.po';

describe('bitirme-app App', () => {
  let page: BitirmeAppPage;

  beforeEach(() => {
    page = new BitirmeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
