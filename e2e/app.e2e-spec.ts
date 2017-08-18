import { AngularAvancadoPage } from './app.po';

describe('angular-avancado App', () => {
  let page: AngularAvancadoPage;

  beforeEach(() => {
    page = new AngularAvancadoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
