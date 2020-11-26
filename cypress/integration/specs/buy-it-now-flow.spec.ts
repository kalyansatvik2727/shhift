//nabigate to https://shift.com/cars/san-francisco?page=1
// select any car in the browse page
// store the price of the car select on this page to cross check later in the summary section
// click on buy online tab on the right side below the price
// click on buy online now button 
// validate the header is correct and contains name of whatever car is selected for example: Buy this Jeep( this will change based on what you select) today!
// assert the text below header : Don’t forget to take advantage of $600 off on Vehicle Protection Plans! Ask your Purchase Advisor about available plans.
// assert steps header 1: Place a deposit. The deposit will be $250, which will allow us to hold the car. Deposits are non-refundable and will go towards your purchase.
// assert steps header 2: Finalize payment over the phone Your Purchase Advisor will reach out to set up payment and review next steps. If you’re interested in financing, we can help with that, too.
// assert steps header 3: Delivered to your door Your vehicle should arrive in 7-10 days,and every Shift vehicle comes with our free 7-day return policy.
// assert the header: Where should we ship your car? In an effort to help during these tough times, we will cover $200 towards shipping. Select an address below to get shipping fee.
// assert the price is same as the price we saw in browse page: No-haggle list price
// Enter first name: Test
// Enter last name: Test
// enter email address: umar.mohammad+random@shift.com
// enter phone number: any random ten digits
// enter shipping address: 2525 16th Street, San Francisco, CA, USA
// assert header: Enter your billing information
// enter name on card: Test Test
// enter card number: 4242 4242 4242 4242
// enter MM YY : 04 24
// enter cvc: 424
// enter post code: 94112
// click on Place $250 deposit button
// you should see error message: Your card was declined. Your request was in live mode, but used a known test card.
