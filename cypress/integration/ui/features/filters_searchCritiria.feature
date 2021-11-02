Feature: Shift - Filter and Search Criteria
        
        Scenario: Filter
                Given I navigate to shift home page with required login
                And I click on 'Shop cars' link
                And I enter car model 'Honda' in shop cars filter and validate length '8' of search results with element '//div[text()="Suggestions"]/parent::div/ul/li'
                And I enter car model 'Honda' in shop cars filter and select the required option '2020 Honda Accord' in search results with element '//div[text()="Suggestions"]/parent::div/ul/li'
