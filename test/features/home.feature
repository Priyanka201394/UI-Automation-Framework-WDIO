@Regression
Feature: To perform the content type search in WTW website 

  Scenario Outline: As a user, I can search the content type for provided region

    Given I am on the home page
    When I change the language to <location> and region to <Region>
    Then The page should navigate to the US <RegionPage>
    When I search for the keyword IFRS 17 in the search box
    Then I must navigate to the results page
    And Validate if the results are sorted by date else sort by date
    When The results are filtered by content type <contentType>
    Then Each article link in the page should start with <url>

Examples:
      | location | Region  |RegionPage| contentType   |url  | 
      |United States |Americas| https://www.wtwco.com/en-US| Article |https://www.wtwco.com/en-US/|
