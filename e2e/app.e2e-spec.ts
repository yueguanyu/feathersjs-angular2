import { FeathersFrontendPage } from './app.po';

describe('feathers-frontend App', function() {
  let page: FeathersFrontendPage;

  beforeEach(() => {
    page = new FeathersFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
