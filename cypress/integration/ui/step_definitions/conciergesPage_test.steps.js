import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommonActions from '../pages/commonActions';
const commonActions = new CommonActions();
const page = require('../pages/carLoanCalculator_page');
const pageActions = page.actions;

Given('I navigate to Concierges Page with required login', () => {
  commonActions.envLogin('/concierges');
});

Then('I validate Concierges landing page text', () => {
  //concierges header validation
  cy.get('h1[class*=Typo]', { timeout: 72000 })
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Concierges & Drivers');
    });

  //concierges text validation
  cy.get('h4[class*=Typo]', { timeout: 72000 })
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'Revolutionize an industry and accelerate your future. Join Shift to change the way people buy and sell their cars.'
      );
    });

  //apply button
  cy.get('button span', { timeout: 72000 })
    .contains('Apply')
    .should('be.visible');
});

And('I validate what is shift? section', () => {
  //what is shift? header validation
  cy.get('h2[class*=Typo]', { timeout: 72000 })
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'What is Shift?');
    });

  //what is shift? text validation
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'Founded in 2013, Shift is a new way to buy and sell used cars. We combine our software – which provides transparent, fair pricing – with unparalleled customer service with test drives and pick ups delivered to the customer. That’s where you come in.'
      );
    });
});

And('I validate Concierge Core Responsibilities section', () => {
  //Concierge Core Responsibilities validation
  cy.get('h4[class*=Typo]', { timeout: 72000 })
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Concierge Core Responsibilities');
    });

  cy.get('div[class*=responsibilities] ul li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'Drive to customers’ locations to evaluate and pick up vehicles, conduct test drives, and deliver purchased vehicles'
      );
    });

  cy.get('div[class*=responsibilities] ul li')
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'Engage and lead customer experiences at our hubs'
      );
    });

  cy.get('div[class*=responsibilities] ul li')
    .eq(2)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'Use our app to guide customers through the Shift buying and selling process'
      );
    });

  cy.get('div[class*=responsibilities] ul li')
    .eq(3)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'Deliver outstanding customer service to each and every customer'
      );
    });
});

And('I validate Flexible Schedule section', () => {
  //Flexible Schedule header validation
  cy.get('h4[class*=Typo]', { timeout: 72000 })
    .eq(2)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Flexible Schedule');
    });

  //Flexible Schedule text validation
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'We do our best to set a schedule that works well for you. We offer part time and full time positions.'
      );
    });
});

And('I validate Reliable Earnings section', () => {
  //Reliable Earnings header validation
  cy.get('h4[class*=Typo]', { timeout: 72000 })
    .eq(3)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Reliable Earnings');
    });

  //Reliable Earnings text validation
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(2)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'Hourly, bi-weekly pay, starting at $15/hour with performance-based increases and promotional opportunities available for rockstars.'
      );
    });
});

And('I validate Growth and Development section', () => {
  //Growth and Development header validation
  cy.get('h4[class*=Typo]', { timeout: 72000 })
    .eq(4)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Growth and Development');
    });

  //Growth and Development text validation
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(3)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'Gain sales and customer service experience. At Shift, we support each other and work with you to find your track.'
      );
    });
});

And('I validate Fast Support section', () => {
  //Fast Support header validation
  cy.get('h4[class*=Typo]', { timeout: 72000 })
    .eq(5)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Fast Support');
    });

  //Fast Support text validation
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(4)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        'You’ll have backup from our dedicated Support Teams. Have questions? They’re there.'
      );
    });
});

And('I validate Why become a Concierge? section', () => {
  //Why become a Concierge? header validation
  cy.get('h2[class*=Typo]', { timeout: 72000 })
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Why become a Concierge?');
    });

  //Why become a Concierge? text validation
  cy.get('h5[class*=Typo]', { timeout: 72000 })
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'eq',
        '“One of Shift’s core values is ‘Bet on Each Other’ and I can wholeheartedly say that everyone here is a team player. Also, the opportunity for growth is part of the culture – your hard work and effort never goes unnoticed.”'
      );
    });

  //1st pic and text assertion
  cy.get('div[class*=TestimonialCarousel]', { timeout: 72000 }).eq(0).click();
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(5)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'Maxwell, Field Operations AssociateShift Los Angeles'
      );
    });

  //2nd pic and text assertion
  cy.get('div[class*=TestimonialCarousel]', { timeout: 72000 }).eq(1).click();
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(5)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'MeShon, Senior ConciergeShift San Francisco'
      );
    });

  //3rd pic and text assertion
  cy.get('div[class*=TestimonialCarousel]', { timeout: 72000 }).eq(2).click();
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(5)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('contain', 'Daniel, ConciergeShift San Francisco');
    });

  //4th pic and text assertion
  cy.get('div[class*=TestimonialCarousel]', { timeout: 72000 }).eq(3).click();
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(5)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'Ashley, Senior ConciergeShift San Diego'
      );
    });

  //5th pic and text assertion
  cy.get('div[class*=TestimonialCarousel]', { timeout: 72000 }).eq(4).click();
  cy.get('p[class*=Typo]', { timeout: 72000 })
    .eq(5)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('contain', 'Zack, Team LeadShift San Diego');
    });

  //Frequently Asked Questions header validation
  cy.get('h2[class*=Typo]', { timeout: 72000 })
    .eq(2)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('eq', 'Frequently Asked Questions');
    });

  //1st question
  cy.get('div[class*="ContentToggle__link-text FAQDisplay__content-toggle"]', {
    timeout: 72000,
  })
    .eq(0)
    .click();
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(0)
    .find('li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'Must be over 18 years of age with at least 2 years of driving history in the U.S. and have a valid driver’s license'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(0)
    .find('li')
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'Need to pass a DMV background check with an acceptable driving record'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(0)
    .find('li')
    .eq(2)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'Personal car is not required, but reliable transportation to and from work sites is necessary'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(0)
    .find('li')
    .eq(3)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('contain', 'Automotive background is not required');
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(0)
    .find('li')
    .eq(4)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'Driving manual transmission/stick shift is great, but not required'
      );
    });

  //2nd question
  cy.get('div[class*="ContentToggle__link-text FAQDisplay__content-toggle"]', {
    timeout: 72000,
  })
    .eq(1)
    .click();
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(3)
    .find('li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'Apply online here. All you need is to submit your resume.'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(3)
    .find('li')
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'A member of our recruiting team will review your application and reach out to you via email to begin the interview process'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(3)
    .find('li')
    .eq(2)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'You can expect a phone or video interview with a Recruiter, and a final in-person interview with the Concierge Leads'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(3)
    .find('li')
    .eq(3)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'If we decide that you’re a good fit for the role, we run a background check that checks driving record and criminal history.'
      );
    });

  //3rd question
  cy.get('div[class*="ContentToggle__link-text FAQDisplay__content-toggle"]', {
    timeout: 72000,
  })
    .eq(2)
    .click();
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(5)
    .find('li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'Comprehensive medical, vision, and dental benefits'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(5)
    .find('li')
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('contain', 'Snacks and drinks at our hubs');
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(5)
    .find('li')
    .eq(2)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('contain', 'Lunch on a weekly basis');
    });

  //4th question
  cy.get('div[class*="ContentToggle__link-text FAQDisplay__content-toggle"]', {
    timeout: 72000,
  })
    .eq(3)
    .click();
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(7)
    .find('li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('contain', 'Snacks and drinks at our hubs');
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(7)
    .find('li')
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should('contain', 'Lunch on a weekly basis');
    });

  //5th question
  cy.get('div[class*="ContentToggle__link-text FAQDisplay__content-toggle"]', {
    timeout: 72000,
  })
    .eq(4)
    .click();
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(9)
    .find('li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'At Shift, we offer Concierges who go above and beyond the opportunities for career growth. We want to reward those who excel, whether it be in aspects of sales or simply delighting our customers.'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(9)
    .find('li')
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'In addition to pay raises, these Concierges are offered chances to transition to (or work with) other teams with high impact roles – where they can be exposed to new responsibilities and expand their professional skill sets to be huge contributors at Shift and beyond.'
      );
    });

  //6th question
  cy.get('div[class*="ContentToggle__link-text FAQDisplay__content-toggle"]', {
    timeout: 72000,
  })
    .eq(5)
    .click();
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(11)
    .find('li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'You receive a guaranteed hourly rate with the ability to earn bonus incentives on top.'
      );
    });
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(11)
    .find('li')
    .eq(1)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'The bonus performance pay is based on going above and beyond and landing top spots in our monthly Concierge contests.'
      );
    });

  //7th question
  cy.get('div[class*="ContentToggle__link-text FAQDisplay__content-toggle"]', {
    timeout: 72000,
  })
    .eq(6)
    .click();
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(13)
    .find('li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'As a registered dealership, our company insurance policy covers our Concierge team so you’re protected while driving on the job.'
      );
    });

  //8th question
  cy.get('div[class*="ContentToggle__link-text FAQDisplay__content-toggle"]', {
    timeout: 72000,
  })
    .eq(7)
    .click();
  cy.get('div[class*="ContentToggle__content"]', { timeout: 72000 })
    .eq(15)
    .find('li')
    .eq(0)
    .invoke('text')
    .then((text) => {
      cy.wrap(text).should(
        'contain',
        'We want our Concierges to feel safe and supported during all transactions both in the field and at our offices. Customers are pre-screened before you meet them and managers approve the time and location of appointment for safety.'
      );
    });
});
