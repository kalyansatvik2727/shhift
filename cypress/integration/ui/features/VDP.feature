@Buyer
Feature: Vehicle Description Page

  @RegressionTest
  Scenario: Visitor is logged in - favorite
    Given I navigate to staging cars page
    And I set geolocation cookies
    And I set login cookies
    When I go into a random car
    Then I verify the favorite icon its empty on VDP
    When I navigate to favorites cars page
    Then I verify the favorite page its empty
    When I navigate back
    And I click on the favorite icon on VDP
    Then I verify the favorite icon its filled on VDP
    When I navigate to favorites cars page
    Then I verify the favorite page its not empty
    When I navigate back
    And I click on the favorite icon on VDP
    Then I verify the favorite icon its empty on VDP
    When I navigate to favorites cars page
    Then I verify the favorite page its empty
    And I end session

  @RegressionTest
  Scenario: Visitor is not logged in - favorite
    Given I navigate to staging cars page
    And I set geolocation cookies
    When I click favorite a random car
    Then I verify a favorite login modal displays
    And I end session
