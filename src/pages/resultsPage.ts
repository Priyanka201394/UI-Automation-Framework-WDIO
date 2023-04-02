import { addLog, click, getAttribute, getText } from '../utils/commands';

class ResultsPage {
  private readonly resultsPage = $("//*[@content='Search']/preceding::title");
  private readonly dateBtn = $("//span[text()='Date']/../span[2]");
  private readonly urlCheck = $$("//a[@href='CoveoResultLink']");

  async resultsPageNavigationCheck() {
    const textResult = await getText(this.resultsPage,"Title")
    console.log(textResult);
    if (textResult.includes("Search - WTW")) {
      addLog('The results page is obatined');
    } else {
      addLog('The result page is not obtained');
    }
  }

  async dateSort() {
    await click(this.dateBtn, 'DateButton');
  }

  async contentTypeSelect(contenttype: string) {
    const articleBtn = $(`//span[text()="${contenttype}"]/../div`);
    await click(articleBtn, 'Article Button');
    await browser.pause(2000);
  }

  async checkContentTypeLink(url: string) {
    for (let i = 0; i < (await this.urlCheck.length); i++) {
      const urls = getAttribute(this.urlCheck[i], 'href');
      if ((await urls).includes(url)) {
        addLog(
          'All the articles link in the page starts with the expcted url link'
        );
      } else {
        addLog('The articles link does not start with the expected url link');
      }
    }
  }
}

export default new ResultsPage();
