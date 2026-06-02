describe('Funcionalidade de Login', () => {
  it('Deve realizar o login com sucesso no Swag Labs', () => {
    
    // 1. Manda o robô entrar no site do Swag Labs (SauceDemo)
    cy.visit('https://www.saucedemo.com');

    // 2. O robô acha os campos pelo ID e preenche o usuário e a senha sozinho!
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // 3. O robô clica no botão de Login!
    cy.get('#login-button').click();

    // 4. Tira uma foto da tela para provar que logou com sucesso!
    cy.screenshot('resultado-login-cypress');
    
  });
});
