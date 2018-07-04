import { MyIonicTutorialAppPage } from './app.po';

describe('my-ionic-tutorial-app App', function() {
  let page: MyIonicTutorialAppPage;

  beforeEach(() => {
    page = new MyIonicTutorialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
