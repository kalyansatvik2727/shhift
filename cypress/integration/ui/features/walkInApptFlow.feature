Feature: Walk In Appointment Flow

  @RegressionTest
  Scenario: I want to validate Walk In Appointments landing page
    Given I log into OpsWeb
    And I navigate to Walk In Appointments Page
    Then I should see the page properly loaded

  @RegressionTest
  Scenario: I want to fill out walk in appointment details

    Given I log into OpsWeb
    And I navigate to Walk In Appointments Page
    And I fill out appointment details
      | Region        | Lot           |
      | San Francisco | San Francisco |
    And I search for a vehicle VIN
      | VIN    |
      | TstVIN |
#    When I select a vehicle
#    Then I should see Vehicle Interest section

#Commented scenarios due to lack of data (VIN from lots)
#  @RegressionTest
#  Scenario: I want to create a vehicle interest#
#
#    Given I log into OpsWeb
#    And I complete walk in appointment details
#    And I navigate to Walk In Appointments Page
#    When I fill out Vehicle Interest details
#    Then I should see Walk In Appointment time options
#
#  @RegressionTest
#  Scenario: I want to create a walk in appointment
#
#    Given I log into OpsWeb
#    And I navigate to Walk In Appointments Page
#    And I complete walk in appointment details
#    And I fill out Vehicle Interest details
#    When I select times for the walk in appointment
#    Then I should see the walk in appointment details page
#
#  @RegressionTest
#  Scenario: I want to create a walk in appointment
#
#    Given I log into OpsWeb
#    And I navigate to Walk In Appointments Page
#    And I complete walk in appointment details
#    And I fill out Vehicle Interest details
#    When I select times for the walk in appointment
#    Then I should see the walk in appointment details page

