import report from '@wdio/allure-reporter';

export const addLog = (log: string) => {
  report.addStep(`Step: ${log}`);
  console.log(`Step: ${log}`);
};

export const click = async (
  element: Promise<WebdriverIO.Element>,
  elementName: string
) => {
  try {
    if ((await element).isDisplayed()) {
      await (await element).click();
      addLog(`The element ${elementName} is clicked `);
    }
  } catch (error) {
    console.error(`The element ${elementName} is not clickable`);
  }
};

export const selectDropdown = async (
  elements: Promise<WebdriverIO.ElementArray>,
  value: string
) => {
  const element = await elements;

  try {
    for (let i = 0; i < element.length; i++) {
      element[i].waitForDisplayed({ timeout: 3000 });
      const elem = await element[i].getText();
      if (elem.includes(value)) {
        element[i].click();
        addLog(`The selected dropdown value is : ${value} `);
        break;
      }
    }
  } catch (error) {
    console.error('Unable to select the dropdown element ');
  }
};

export const setValue = async (
  element: Promise<WebdriverIO.Element>,
  value: string
) => {
  try {
    if ((await element).isDisplayed()) {
      (await element).setValue(value);
      addLog(`The value ${value} is set for the element  `);
    }
  } catch (error) {
    console.error(`Unable to set the value  ${value} for the element `);
  }
};

export const getText = async (
  element: Promise<WebdriverIO.Element>,
  elementName: string
) => {
  try {
    if ((await element).isDisplayed()) {
      return await (await element).getText();
    }
    addLog(`The text is obatined for the element ${elementName}   `);
  } catch (error) {
    console.error(`Unable to get the text for the element  ${elementName}`);
  }
};

export const getTitle = async (
    element: Promise<WebdriverIO.Element>,
    elementName: string
  ) => {
    try {
      if ((await element).isDisplayed()) {
        return await (await element).getTitle();
      }
      addLog(`The title is obatined by the element ${elementName}   `);
    } catch (error) {
      console.error(`Unable to get the title by the element  ${elementName}`);
    }
  };

export const getAttribute = async (
  element: Promise<WebdriverIO.Element>,
  value: string
) => {
  try {
    if ((await element).isDisplayed()) {
      return await (await element).getAttribute(value);
    }
    addLog(`The attribute value ${value} is obatined for the element  `);
  } catch (error) {
    console.error(
      `Unable to get the attribute  value  ${value} for the element `
    );
  }
  
};
