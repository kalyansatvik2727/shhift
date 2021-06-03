# NOTE: This test should be done in Staging!!
# Set the zipcode to be SF (94112)
# Navigate to https://forcebase1.a.shiftdev.io/cars after signing in
# Select any car 
# Select any date from the date picker
# Choose an arrival window from the dropdown for example 10AM - 12PM
# Click on Book Test drive
# Enter any email
# Click on come to us in XYZ City
# Select any date and time window again
# Click continue
# Selct no thanks
# Enter personal details
# Click on reserve CTA (make sure the time window we picked is shown on the CTA)

Feature: Shift - Test Drive flow

        Test Drive flow Automation
        Scenario: Validate Test Drive flow
                Given I navigate to shop cars Page with required login
                And I enter zipcode and click on update
                And I select Test drive at home filter
                And I click on any car from the list
                And I select a date for Test drive at home date picker
                And I choose an arrival window from the dropdown
                And I click on Book Test drive
                And I click on come to us link
                And I select a time slot
                And I click on Continue button 
                And I click on No thanks button 
                And I enter first name
                And I enter lastname name
                And I enter lastname name
                And I enter Phone Number
                When I click on Reserve button 
                Then I validate We're holding your spot section

