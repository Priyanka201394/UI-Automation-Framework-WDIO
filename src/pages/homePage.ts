import { addLog, click, getText } from '../utils/commands';

class HomePage {
  constructor() {
    this.verifyPageTitle();
  }

  private readonly expectedTitle = 'Insurance Consulting and Technology - WTW';
  private readonly title = $(
    "//*[@name='description']/preceding-sibling::title"
  );

  private readonly cookies = $("//*[text()='Agree and Proceed']");
  private readonly regionLangBtn = $(
    "//nav[@aria-label='Location Selector']/button/span"
  );

  // public regionLang = $$("//*[text()='Choose your location']/..//button/span/span");

  async openHomePage() {
    browser.switchToFrame(1);
    await click(this.cookies, 'cookiesValue');
    browser.switchToParentFrame();
  }

  async selectRegion( region: string) {
    // called inside the async function due to lazy evaluation of WDIO 
    const regionLang = $$("//*[text()='Choose your location']/..//button/span/span");
    await click(this.regionLangBtn, 'Region&Language Button');
    const regionLan = await regionLang;
    await browser.pause(2000);
    for(let i = 0; i < regionLan.length; i++){
      await regionLan[i].waitForDisplayed({ timeout: 3000 })
      const element = await (regionLan[i]).getText();
      if(element.includes(region)){
        await (regionLan[i]).click();
        addLog("The location button is clicked")
        break;
      }
    } 
  }

  async selectLanguage(location: string){
    const locations = location + ' ';
    const locationBtn = $(
      `//*[text()='Location']/../../../tbody//td[text()="${locations}"]/following-sibling::td//li`
    );
    await (
      await locationBtn
    ).scrollIntoView({ block: 'end', behavior: 'smooth' });
    browser.pause(2000);
    await click(locationBtn, 'Location Button');
  }

  async verifyPageTitle() {
    try {
      const titleOFPage = await getText(this.title, 'title');
      if (titleOFPage == this.expectedTitle) {
        addLog('The home page is obtained');
      }
    } catch {
      console.log('The home page is not obatined');
    }
  }
}
export default new HomePage();
