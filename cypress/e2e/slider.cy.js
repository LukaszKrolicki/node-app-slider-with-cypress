describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Navigation Test', function () {
  it('Should navigate to the next and previous slides', function () {
    cy.visit('http://localhost:3000');

    // Click the next button and check if the next slide is displayed
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('not.have.class', 'swiper-slide-prev');

    // Click the previous button and check if the previous slide is displayed
    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('not.have.class', 'swiper-slide-next');
  });
});