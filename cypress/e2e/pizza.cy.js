

describe('test', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:5173/')
  })

  it('sipariş formunda isim alanı 3 karakterden fazla yazılınca hata mesajı çıkıyor mu?', () => {
    cy.visit('localhost:5173/neworder')

    cy.get('[data-cy="isim"]').type("semih");

    cy.get('[data-cy="isim-hata"]').should('not.exist');
  })

  it('sipariş formunda malzeme checkboxları birden fazla işaretlenebiliyor mu?', () => {
    cy.visit('localhost:5173/neworder')

    cy.get('[type="checkbox"]').check()
  })

  it('form hatasız gönderiliyor mu?', () => {
    cy.visit('localhost:5173/neworder')

    cy.get('[type="radio"]').check("küçük")
    cy.get('select').select("İnce")
    cy.get('[type="checkbox"]').check()
    cy.get('[data-cy="isim"]').type("semih");
    cy.get('[data-cy="submit"]').click();

    cy.contains('TEBRİKLER').should('be.visible');

  })

})