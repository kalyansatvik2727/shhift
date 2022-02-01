@Buyer
Feature: Shift - VDP Sales Pending

  @RegressionTest
  Scenario: Validate VDP Sales Pending
    Given I navigate to shift sale pending page with staging url
    And I set geolocation cookies
    When I click on random sale pending car
    Then I validate 'The sale of this car is currently pending. We can notify you if this car becomes available.' text
    And I validate 'Notify Me' text
    And I validate 'Browse more cars' text
    And I validate 'Ask a question' text is not exist
    And I validate "We’ll let you know if this car becomes available" text
    And I enter data in First Name
    And I enter data in Last Name
    And I enter data in Email
    And I enter data in Phone
    And I click on Send button
    And I validate 'Thanks!' text
    And I validate 'A Concierge will be in touch soon with an answer to your question.' text
    
