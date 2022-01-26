@Buyer
Feature: Shop Flow Page

	@RegressionTest
	Scenario: I want to validate the Shop Flow

		Given I go to 'https://shift.com/cars?q=honda'
		And I set geolocation cookies
		And I select the first car
		When I buy online
		Then I should see the Buy Online page displayed