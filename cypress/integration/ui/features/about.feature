Feature: Shift | About Page

        About Page Automation
        Scenario: Validate About Page
                Given I navigate to About Page with required login
                When I validate About landing page text
                And I validate Executive team section
                And I validate Latest Pre Releases section
                And I validate In the news section