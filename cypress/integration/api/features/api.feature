Feature: Shift - POST request

        Validate POST Request
        Scenario Outline: Validate POST request
                Given I send a POST request to calculate tax fee "<state>"
        Examples:
                        | state |
                        | AZ    |