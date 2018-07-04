import { MeshPortfolioPage } from './app.po';

describe('mesh-portfolio App', function() {
  let page: MeshPortfolioPage;

  beforeEach(() => {
    page = new MeshPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
