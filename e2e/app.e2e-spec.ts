import { TestmodulePage } from './app.po';

describe('testmodule App', function() {
  let page: TestmodulePage;

  beforeEach(() => {
    page = new TestmodulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
