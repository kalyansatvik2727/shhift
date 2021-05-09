Feature: Shift | Get Pre-qualified flow

    Get Pre-qualified flow Automation
    Scenario: Validate Car Get Pre-qualified flow
        Given I navigate to Finance Page with required login
        And I click on Get pre-qualified button
        And I validate Intro page
        And I click on Get my terms button
        And I enter Email
        And I enter Phone Number
        And I enter password
        And I check I agree checkbox
        And I click on Continue button
        And I enter Monthly rent
        And I enter Total Income
        And I select Year
        And I click on Continue button
        And I enter Credit Score
        And I click on Continue button
        And I check Accept Terms checkbox
        When I click on Continue button
        Then I validate borrow amount is greater than zero
        And I validate APR range is greater than zero

