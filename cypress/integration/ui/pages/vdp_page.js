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
}

export default VDPPage;
