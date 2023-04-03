## Task-1 
  - The **Task-1-Solution** File has the neccesary test cases and is added in the git repo.
  
## Task - 2
# UI-Automation-Framework-WDIO
## Table Of Contents
- Project Description
- Tech Stack
- Setup
- Framework Design
- Enhancements

### Project Description
Creation of UI Automation framework to automate the provided test cases from WTW.

### Tech Stack 
- WebDriverIO is used to interact with the Web applications.
- Typescript language is used to write the scripts.
- Cucumber is used to support the BDD automation.
- Allure reports are used to display the reports.
- ESLint to have a clean and consistent code.

### Setup and steps to run 
 - Clone this repository to your local machine.
 - Install Node.js and npm using the link [How to install node](https://nodejs.org/en/download/) and [How to install npm](https://www.npmjs.com/get-npm)
 - Install the project dependencies by running 
 ```bash
 npm install.
 ```
 
 - Run Regression suite test cases
```bash
npm run regression
```

 - Generate the allure report
 ```bash
 npm run report
 ```
 
### Framework Design
  - It follows the BDD approach using Cucumber, where Feature files are created and called by the steps under the tests folder.
  - This framework is designed based on the Page Object model pattern, where each page is implemeted in a class under src folder.
  - The common commands are placed in the utils folder under src.
  - The config details are available in the wdio-conf.ts file which has all the details about the browser, baseURL,  features, steps and reporters to execute.
  
### Enhancements
  - This framework can be extended to perform the automation of all the pages in the WTW application by adding the features and test_cases for each page.
  - This fraemwork can also have assertions by having a assertion.ts file under utils and all the common assert methods can be placed it in as the commands.ts.
  - This framework can be extended to use the mail verfication for functionalities using Mailinatour dependencies.
  - This framework can also be extended to perform API testing through axios library or supertest.
  - The framework can be deployed in a CICD tool for build, test an deploy and can be configured to run regularly scheduled tests.
  
  
  
  
 
 
