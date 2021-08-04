@Buyer
Feature: Shop Flow Page

	@RegressionTest
	Scenario: I want to validate the Shop Flow

		Given I navigate site
		And I go to Shop Landing Page
		And I update the Zip Code
		And I make a search
		And I select a car
		When I buy online
		Then I should see the Buy Online page displayed