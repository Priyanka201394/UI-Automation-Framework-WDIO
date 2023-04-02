import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../../src/pages/homePage';
import regionPage from '../../src/pages/regionPage';
import resultsPage from '../../src/pages/resultsPage';
// import { addLog } from '../../src/utils/commands';

Given(/^I am on the home page$/, async function () {
  
    await browser.url('/');
    await browser.maximizeWindow();
    await homePage.openHomePage();
  });

When(/^I change the language to (.+) and region to (.+)$/, async function (location: string, region: string) {
  await homePage.selectRegion(region);
  await homePage.selectLanguage(location);
  });

  Then(/^The page should navigate to the US (.+)$/,async function (regionPageData: string) {
    await regionPage.regionPageNavigation(regionPageData);
  });

 When(/^I search for the keyword IFRS 17 in the search box$/,async function () {
  await regionPage.searchWithKeyword();
  });

  Then(/^I must navigate to the results page$/,async function () {
  await resultsPage.resultsPageNavigationCheck();
  });

  Then(/^Validate if the results are sorted by date else sort by date$/,async function () {
   await resultsPage.dateSort();
    
  });
When(/^The results are filtered by content type (.+)$/,async function (contenttype) {
  await resultsPage.contentTypeSelect(contenttype);

  });

Then(/^Each article link in the page should start with (.+)$/,async function (url) {
    await resultsPage.checkContentTypeLink(url);

  });

