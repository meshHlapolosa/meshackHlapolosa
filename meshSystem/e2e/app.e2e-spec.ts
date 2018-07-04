import { MeshSystemPage } from './app.po';

describe('mesh-system App', function() {
  let page: MeshSystemPage;

  beforeEach(() => {
    page = new MeshSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
