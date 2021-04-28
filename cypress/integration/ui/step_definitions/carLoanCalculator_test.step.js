import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CommonActions from '../pages/CommonActions'
const commonActions = new CommonActions()
const page = require('../pages/carLoanCalculator_page')
const pageActions = page.actions

Given('I navigate to Car Loan Calculator Page with required login', () => {
    commonActions.envLogin('/car-loan-calculator')
})

When('I validate landing page text', () => {
    pageActions.validateHeader1()
    pageActions.validateHeader2()
})

And('I validate Credit score Estimated APR section', () => {
    pageActions.validateCreditCoreEstimatedAPRTitle()
    pageActions.assertRebuildingButton()
    pageActions.assertGoodButton()
    pageActions.assertExcellentButton()
})

And('I validate Loan Length section', () => {
    pageActions.validateLoanLengthTitle()
    pageActions.assert24moButton()
    pageActions.assert36moButton()
    pageActions.assert48moButton()
    pageActions.assert60moButton()
    pageActions.assert72moButton()
})

And('I validate Car Price section', () => {
    pageActions.validateCarPriceTitle()
    pageActions.validateCarPriceInput()
})

And('I validate Monthly Payment section', () => {
    pageActions.validateMonthyPaymentTitle()
    pageActions.validateMonthlyPaymentInput()
})

And('I validate Down Payment section', () => {
    pageActions.validateDownPaymentTitle()
    pageActions.validateDownPaymentInput()
})

And('I validate Shop Car button', () => {
    pageActions.validateShopCarsButton()
})

And('I validate Estimated Loan details button', () => {
    pageActions.validateEstimatedLoanDetailsButtonText()
})

And('I click on Estimated Loan details button', () => {
    pageActions.clickOnEstimatedLoanDetailsButton()
})

Then('I validate Estimated Loan details button modal', () => {
    pageActions.validateEstimatedLoanDetailsModal()
})

And('I close Estimated Loan details button modal', () => {
    pageActions.closeEstimatedLoanDetailsModal()
})