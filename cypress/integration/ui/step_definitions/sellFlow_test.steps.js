import HomePage from '../pages/home_page';
import SellerPage from '../pages/seller_page';
import BasicDetailsPage from '../pages/basicDetails_page';
import AdditionalsPage from '../pages/additionals_page';
import VehicleHistoryPage from '../pages/vehicleHistory_page';
import EstimatePage from '../pages/estimate_page';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const home = new HomePage();
const seller = new SellerPage();
const basic = new BasicDetailsPage();
const additional = new AdditionalsPage();
const history = new VehicleHistoryPage();
const estimate = new EstimatePage();

Given('I navigate site', () => {
  home.visit();
});

When('I go to Seller Landing Page', () => {
  home.goToSell();
});

When('I complete the Basic Details', () => {
  // Complete Basic Details page
  seller.clickGMEButton();
  basic.addZIP();
  basic.addMileage();
  basic.selectTRIM();
  basic.selectColorBlack();
  basic.selectBody();
  basic.selectTransmission();
  basic.selectDriveTrain();
  basic.selectEngine();
  basic.clickContinue();
});

When('I complete the Basic Details with 170k miles', () => {
  seller.clickGMEButton();
  basic.addZIP();
  basic.add170kMileage();
  basic.selectTRIM();
  basic.selectColorBlack();
  basic.selectBody();
  basic.selectTransmission();
  basic.selectDriveTrain();
  basic.selectEngine();
  basic.clickContinue();
})

When('I complete the Basic Details with OOA Zip Code', () => {
  seller.clickGMEButton();
  basic.addOOAZIP();
  basic.addMileage();
  basic.selectTRIM();
  basic.selectColorBlack();
  basic.selectBody();
  basic.selectTransmission();
  basic.selectDriveTrain();
  basic.selectEngine();
  basic.clickContinue();
})

When('I complete the Basic Details for Tesla', () => {
  // Complete Basic Details page
  seller.clickGMEButton();
  basic.addZIP();
  basic.addMileage();
  basic.selectTestlaTRIM();
  basic.selectColorBlack();
  basic.selectBody();
  basic.selectTeslaTransmission();
  basic.selectRearDriveTrain();
  basic.selectElectricEngine();
  basic.clickContinue();
});

When('I complete the Additionals', () => {
  // Complete Additionals page
  additional.verifyAdditionalsFound();
  basic.clickContinue();
});

When('I complete the Additionals for Tesla', () => {
  // Complete Additionals page
  additional.addTeslaAdditionals();
  basic.clickContinue();
});

When('I complete the Vehicle History', () => {
  // Complete Vehicle History page
  history.verifyQ1();
  history.selectQ1No();
  history.verifyQ2();
  history.selectQ2No();
  history.verifyQ3();
  history.selectQ3No();
  history.verifyQ4();
  history.selectQ4No();
  history.verifyQ5();
  history.selectQ5No();
  history.verifyQ6();
  history.selectQ6No();
  history.verifyQ7();
});

When('I complete the Vehicle History with Lease', () => {
  history.verifyQ1();
  history.selectQ1No();
  history.verifyQ2();
  history.selectQ2No();
  history.verifyQ3();
  history.selectQ3No();
  history.verifyQ4();
  history.selectQ4No();
  history.verifyQ5();
  history.selectQ5No();
  history.verifyQ6();
  history.selectQ6Yes();
  history.selectLease();
  history.verifyQ7();
})

When('I end the Quote Flow', () => {
  seller.clickGMEButton();
});

Then('I should see my estimate', () => {
  estimate.verifyEstimatePage();
});


Then('I should see my estimate for Tesla', () => {
  estimate.verifyEstimatePageTesla();
});

Then('I should see Reject Out Of Area page', () => {
  estimate.verifyOOAPage();
})