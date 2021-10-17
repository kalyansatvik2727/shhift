Feature: Shift - POST request

        Validate POST Request
        Scenario Outline: Validate POST request
                Given I send an XML POST request with body "<body>"
                Examples:
                        | body         |
                        | xml_body.xml |
                        | xml_body2.xml |