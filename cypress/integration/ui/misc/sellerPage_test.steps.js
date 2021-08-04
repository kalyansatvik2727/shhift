import HomePage from '../pages/home_page';
import SellerPage from '../pages/seller_page';

const {
  Given,
  When,
  Then,
  Before
} = require("cypress-cucumber-preprocessor/steps");

const home = new HomePage();
const seller = new SellerPage();

Given('I navigate Seller Langing Page', () => {
    home.visitSeller();
})

Then('I should see all the Seller page loaded', () => {
	seller.verifySellerPage();
})

Then('I see the Get My Estimate button disabled', () => {
	seller.verifyGMEDisabled();
})

Then('I should see the Get My Estimate button enabled', () => {
	seller.verifyGMEEnabled();
})

When('I enter YMM', () => {
	seller.selectYear();
	seller.selectMake();
	seller.selectModel();
})

When('I enter Tesla YMM', () => {
	seller.selectYear2018();
	seller.selectTeslaMake();
	seller.selectModel3();
})

When('I enter LP', () => {
	seller.selectLP();
	seller.addLP();
	seller.addState();
})

When('I enter VIN', () => {
	seller.selectVIN();
	seller.addVIN();
})
