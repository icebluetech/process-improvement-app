import { ProcessImprovementAppPage } from './app.po';

describe('process-improvement-app App', () => {
  let page: ProcessImprovementAppPage;

  beforeEach(() => {
    page = new ProcessImprovementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
