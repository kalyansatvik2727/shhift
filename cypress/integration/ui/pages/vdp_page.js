class VDPPage {

	verifyVDPPage() {
		cy.url().should('include', '/car');
		cy.get('div', {timeout:10000}).contains('Test drive at home').should('be.visible');
		cy.get('button').contains('Book test drive at home');
		cy.get('div', {timeout:10000}).contains('Test drive at Shift').should('be.visible');
		cy.get('button').contains('Book test drive at Shift');
		cy.get('#VDPBuyOnlineTabScreenerId').contains('Buy online');
	}

	goToBuyOnlineTab(){
		cy.get('#VDPBuyOnlineTabScreenerId').click();
	}

	buyOnline(){
		const buyOnline = cy.get('button').contains('Buy online now');
		buyOnline.click({force:true});
	}

	verifyBuyOnlinePage(){
		cy.url().should('include', '/buy-online');
		cy.get('div', {timeout:10000}).contains('Buy this Honda today!').should('be.visible');
		cy.get('div', {timeout:10000}).contains('Shipping Address').should('be.visible');
		cy.get('div', {timeout:10000}).contains('Billing information').should('be.visible');
	}
}

export default VDPPage;