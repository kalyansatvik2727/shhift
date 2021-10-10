Feature: Shift - BIN - Buy Online Now
        
        Scenario: BIN
                Given I navigate to shift home page with forcebase url and required login
                And I click on 'Shop cars' link
                And I select random car
                And I click on Buy online
                And I enter first name in BIN
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
