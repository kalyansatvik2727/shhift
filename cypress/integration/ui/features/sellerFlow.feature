@Seller
Feature: Seller Flow Page

	@RegressionTest
	Scenario: I want to validate the Seller Flow

		Given I navigate site
		And I go to Seller Landing Page
		And I enter YMM
		And I complete the Basic Details
		And I complete the Additionals
		And I complete the Vehicle History
		When I end the Quote Flow
		Then I should see my estimate

	@RegressionTest
	Scenario: Validate I got DTW (170k miles)

		Given I navigate site
		And I go to Seller Landing Page
		And I enter YMM
		And I complete the Basic Details with 170k miles
		And I complete the Additionals
		And I complete the Vehicle History
		When I end the Quote Flow
		Then I should see my estimate

	@RegressionTest
	Scenario: Validate I got Reject Out Of Area

		Given I navigate site
		And I go to Seller Landing Page
		And I enter YMM
		And I complete the Basic Details with OOA Zip Code
		And I complete the Additionals
		And I complete the Vehicle History
		When I end the Quote Flow
		Then I should see Reject Out Of Area page

	@RegressionTest
	Scenario: Validate I got Approve with Lease

		Given I navigate site
		And I go to Seller Landing Page
		And I enter YMM
		And I complete the Basic Details
		And I complete the Additionals
		And I complete the Vehicle History with Lease
		When I end the Quote Flow
		Then I should see my estimate

	@RegressionTest
	Scenario: Validate I got Tesla Auto scalated

		Given I navigate site
		And I go to Seller Landing Page
		And I enter Tesla YMM
		And I complete the Basic Details for Tesla
		And I complete the Additionals for Tesla
		And I complete the Vehicle History
		When I end the Quote Flow
		Then I should see my estimate for Tesla