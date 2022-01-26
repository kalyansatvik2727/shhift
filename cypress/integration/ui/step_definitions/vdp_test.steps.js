import VDPPage from '../pages/vdp_page';

const {
  Given,
  When,
  Then,
  Before,
} = require('cypress-cucumber-preprocessor/steps');

const vdpPage = new VDPPage();

Then('I verify the favorite icon its empty on VDP', () => {
  vdpPage.verifyFavoriteIconItsEmpty();
});

Then('I verify the favorite icon its filled on VDP', () => {
  vdpPage.verifyFavoriteIconItsFilled();
});

And('I click on the favorite icon on VDP', () => {
  vdpPage.clickFavoriteIcon();
});