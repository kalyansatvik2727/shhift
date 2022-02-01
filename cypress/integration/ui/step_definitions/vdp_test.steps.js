import VDPPage from '../pages/vdp_page';
import CommonActions from '../pages/commonActions';


const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const vdpPage = new VDPPage();
const commonActions = new CommonActions();

Then('I verify the favorite icon its empty on VDP', () => {
  vdpPage.verifyFavoriteIconItsEmpty();
});

Then('I verify the favorite icon its filled on VDP', () => {
  vdpPage.verifyFavoriteIconItsFilled();
});

And('I click on the favorite icon on VDP', () => {
  vdpPage.clickFavoriteIcon();
});

And('I navigate to shift sale pending page with staging url', () => {
  vdpPage.visitSalePendingPage();
});

And('I click on random sale pending car', () => {
  vdpPage.clickOnRandomSaleEndingCar();
});

And('I enter data in First Name', () => {
  commonActions.enterDataInInput('[name="first_name"]','Steve');
});

And('I enter data in Last Name', () => {
  commonActions.enterDataInInput('[name="last_name"]','Smith');
});

And('I enter data in Email', () => {
  commonActions.enterDataInInput('form.mx-3 input[type="email"]','user@user.com');
});

And('I enter data in Phone', () => {
  commonActions.enterDataInInput('[name="phone"]','777-777-7777');
});

And('I click on Send button', () => {
  commonActions.clickOnButton('button[type=submit]');
});


