import { addLog, click, setValue } from '../utils/commands';

class RegionPage {
  private readonly searchBtn = $("//span[contains(text(),'Search')]/..");
  private readonly searchField = $("//form[@role='search']/input");

  async searchWithKeyword() {
    click(this.searchBtn, 'searchButton');
    await browser.pause(2000);
    setValue(this.searchField, 'IFRS 17');
    await browser.pause(2000);
    await browser.keys('\uE007');
  }

  async regionPageNavigation(regionPageData: string) {
    browser.pause(2000);
    const page = await browser.getUrl();
    console.log(page)
    const region = page.toLowerCase();
    const regionFromFeature = regionPageData.toLowerCase();

    if (region.includes(regionFromFeature)) {
      addLog('The page has navigated to region specific page');
    } else {
      addLog('The region page is not obtained');
    }
  }
}

export default new RegionPage();
