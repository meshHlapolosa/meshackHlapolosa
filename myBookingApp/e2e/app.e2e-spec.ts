import { MyBookingAppPage } from './app.po';

describe('my-booking-app App', function() {
  let page: MyBookingAppPage;

  beforeEach(() => {
    page = new MyBookingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
