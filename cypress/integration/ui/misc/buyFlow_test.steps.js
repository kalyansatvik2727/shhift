import HomePage from '../pages/home_page';
import BuyerPage from '../pages/buyer_page';
//import VDPPage from '../pages/vdp_page';

const {
  Given,
  When,
  Then,
  Before
} = require("cypress-cucumber-preprocessor/steps");

const home = new HomePage();
const buyer = new BuyerPage();
const vdp = new VDPPage();

Given('I navigate site', () => {
    home.visit();
})

When('I go to Shop Landing Page', () => {
	home.goToBuy();
})

When('I filter by test drive at home', () => {
	buyer.filterByTestDrive();
})

When('I update the Zip Code', () => {
	buyer.enterZipCode();
	buyer.updateZipCode();
})

When('I make a search', () => {
	buyer.chooseMakeHonda();	
})

When('I select a car', () => {
	buyer.selectFirstCarCard();
})

When('I buy online', () => {
	vdp.verifyVDPPage();
	vdp.goToBuyOnlineTab();
	vdp.buyOnline();
})

Then('I should see the Buy Online page displayed', () => {
	vdp.verifyBuyOnlinePage();
})