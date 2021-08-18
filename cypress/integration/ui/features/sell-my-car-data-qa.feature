Feature: Shift - Sell My Car flow


    Scenario: Validate data-qa attribute for year,make and model estimate
        Given I navigate to sell-my-car page
        And I select year with data-qa attribute
        And I select make with data-qa attribute
        And I select model with data-qa attribute
        And I click on Get my estimate button

    Scenario: Validate data-qa attribute for license plate
        Given I navigate to sell-my-car page
        And I click on license plate with data-qa attribute
        And I enter license plate with data-qa attribute
        And I select state with data-qa attribute
        And I click on Get my estimate button