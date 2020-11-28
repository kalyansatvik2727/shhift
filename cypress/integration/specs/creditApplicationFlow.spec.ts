//Navigate to https://shift.com/prequalify-for-financing?&financing.prequalificationClearerCommunicationVariation=PrequalificationClearerCommunicationVariationControl
//Click on Get started
//enter email: umar.mohammad+randomnumber@shift.com
// enter phone number: 3759874567
//enter password: test123#
//click checkbox
//click continue
//enter 1000 for rent and click continue
//enter 150,000 per year for income and click continue
//enter 799 as credit score and continue
//click checkbox and continue
//assert text: Congrats! You’re pre-qualified.
// Click on Shop with my terms, it navigates to cars page: https://shift.com/cars/

// select any car from the options ( save this car name make and model to cross check in later steps)
//Click on Apply for financing link above date calendar
// click on get started


// Assert that the car selected in above step is shown at the top left of the page and that it matches
// Assert left menu items are shown: 

YOUR LOAN TERMS
Loan
Gap Coverage
Protection Plan
YOUR APPLICATION
Personal
Housing
Income
Legal
Review

// Assert header: Choose your loan terms
//hover on trade in quesiton mark circle and assert the text matches
// change the downpayment to some lower or higer value. Change it by few hundreds
// Click on loan length dropdown and change the loan length
//Click on continue with these terms
// Assert the header and text: "Protect your purchase Safeguard yourself from the unexpected costs of car ownership. Adding protection to your financed total makes it easy and affordable to get the peace of mind you need. Shift offers: Gap coverage In the event your car is totalled, this covers the difference between what you owe on your car loan and the value your insurance company will pay for the car. Vehicle protection plan Our protection plan provides comprehensive coverage against the mechanical and electrical problems your car may face.

//Click on continue with plans button
// assert the header and text : Gap Insurance. Don’t get stuck owing money if your car is totaled
// Click on link See whats covered and check that a modal shows up
// assert the header and text on this pop up page and click on Got it button
// Click on Save & Continue
//Assert the header and text: Vehicle Protection Plan Rest easy with coverage that rivals new car warranties
// Click on link See whats covered and check that a modal shows up
// assert the header and text on this pop up page and click on Got it button
//Click on save and continue button
// assert the header: Are you applying on your own?
// Click on Yes I am and click continue
// assert header: First, tell us about yourself
// enter firstname: test
// enter last name: test
//enter phone number: 7480982948
//enter social security number: 887-88-9000
//enter date of birth: 05/22/1990
//Click continue
//asseet header: Where do you currently live?
//enter address:2525 16th st 
// enter city: san francisco
// enter zipcode: 94112
//enter years: 10
//enter months:5
// click continue
//Clcik I own it and enter $1000 for payment

//Clcik continue

//Clcik Full time and click continue


//Enter employer name: Tech Company
//Enter job title: IT Analyst
// Enter phone number: 4789037659
//enter 5 years and enter 5 months
//enter 150,000 for income and click continue
// Check two agreeemnt boxes
// Assert header:Almost there, please confirm this is all correct
// assert the Button Apply for loan is present and displayed

// DO NOT CLICK ON APPLY FOR LOAN BUTTON AS THIS IS PROD.























