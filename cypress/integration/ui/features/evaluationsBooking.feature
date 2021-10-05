Feature: Shift - Booking Evaluations
        
        # Scenario: At Shift - Booking evalution
        #         Given I navigate to sell or trade page with forcebase url and required login
        #         And I select 'Audi A4 Approved Retail' test preset dropdown
        #         And I click on button with label 'Get my estimate'
        #         And I click on At Shift booking evalution
        #         And I click on the pickup time
        #         And I enter lisence plate number in booking evalution
        #         And I select value 'CA' from dropdown '#license_plate_state_mobile'
        #         And I enter first name in booking evalution
        #         And I enter last name in booking evalution
        #         And I enter email in booking evalution
        #         And I enter phoneNumber in booking evalution
        #         And I click on Schedule evaluation button
        #         Then I validate Evaluation booked header

        Scenario: At Home - Booking evalution
                Given I navigate to sell or trade page with forcebase url and required login
                And I select 'Audi A4 Approved Retail' test preset dropdown
                And I click on button with label 'Get my estimate'
                And I click on At Home booking evalution
                And I enter address in booking evalution