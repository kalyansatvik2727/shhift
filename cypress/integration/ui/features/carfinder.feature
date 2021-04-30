Feature: Shift | Car Finder Page

    Car Finder Page Automation
    Scenario: Validate Car Finder Page
        Given I navigate to Car Finder Page with required login
        And I click on car finder menu button
        And I validate Car Finder landing page text
        And I click on start car finder button
        And I select any random card in What are you looking for in your next car? section
        And I click on Next button
        And I select any 3 random cards in What is most important to you in a car? section
        And I click on Next button
        And I select Monthly payment
        #And I enter Monthly payment
        And I click on Next button
        And I select 3 car models in Which body styles do you prefer? section
        And I click on Finish button
        And I enter email id
        And I Click on see my cars
        Then I click on View complete details button of any car and compare car model between We have found cars for you page and actual car page

