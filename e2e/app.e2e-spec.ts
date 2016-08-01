import { SemanticSurveyPage } from './app.po';

describe('semantic-survey App', function() {
  let page: SemanticSurveyPage;

  beforeEach(() => {
    page = new SemanticSurveyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
