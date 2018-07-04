import { MyCVprojectPage } from './app.po';

describe('my-cvproject App', function() {
  let page: MyCVprojectPage;

  beforeEach(() => {
    page = new MyCVprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
