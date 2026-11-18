describe('Módulo 05 - Responsividade', () => {

  it('RF-15 - Menu visível em Desktop', () => {

    cy.viewport(1920, 1080)

    cy.visit('https://automationteststore.com/')

    cy.get('#categorymenu')
      .should('be.visible')

  })

  it('RF-16 - Página acessível em Mobile', () => {

    cy.viewport('iphone-x')

    cy.visit('https://automationteststore.com/')

    cy.get('body')
      .should('contain.text', 'Automation Test Store')

  })

})