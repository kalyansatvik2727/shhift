Feature: Shift - Vehicle Description Page

        Vehicle Description Page Automation
        Scenario: Validate Vehicle Description Page
                Given I navigate to shift home page with required login
                And I click on Shop Cars link
                And I select any random car
                Then I validate vehicle description page
                And I validate 'Overview' section
                And I click on 'See all specs' link
                And I validate Modal 'Vehicle Specs'
                And I close Modal
                And I validate 'Features' section
                And I click on 'See all features' link
                And I validate Modal 'Safety'
                And I validate Modal 'Comfort'
                And I close Modal