describe('app', () => {
  it('can visit the app', () => {
    cy.visit('/')
      .getByText('Home')
      .click()
  })
})
