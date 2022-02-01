class VDPPage {
  
  verifyFavoriteIconItsEmpty(){
    this.getFavoriteIcon().should('not.have.class', 'filled-heart');
  }

  verifyFavoriteIconItsFilled(){
    this.getFavoriteIcon().should('have.class', 'filled-heart');
  }

  clickFavoriteIcon(){
    this.getFavoriteIcon().click();
  }
  
  getFavoriteIcon(){
    return cy.xpath("(//div[contains(@id,'heart-icon')])[3]");
  }

  visitSalePendingPage(){
    return cy.visit('https://staging.shift.com/cars?q=sale+pending');
  }

  clickOnRandomSaleEndingCar(){
    return cy.xpath('//span[contains(text(),"sale pending")]').first().click();
  }

  enterFirstName(name){
    return cy.get('[name="first_name"]').type();
  }

}

export default VDPPage;
