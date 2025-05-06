describe('Login Tests - Sauce Demo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('T01 - Login with valid information', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
    cy.screenshot('T01_login_success');
  });

  it('T02 - Empty username and password', () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username is required');
    cy.screenshot('T02_empty_fields');
  });

  it('T03 - Wrong password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    cy.screenshot('T03_wrong_password');
  });

  it('T04 - Wrong username', () => {
    cy.get('[data-test="username"]').type('wrong_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    cy.screenshot('T04_wrong_username');
  });

  it('T05 - Empty username', () => {
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Username is required');
    cy.screenshot('T05_empty_username');
  });

  it('T06 - Empty password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Password is required');
    cy.screenshot('T06_empty_password');
  });
});
