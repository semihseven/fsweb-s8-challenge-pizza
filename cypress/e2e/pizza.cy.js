

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

  it('sipariş formunda malzeme 5 adet checkbox işaretlenebiliyor mu?', () => {
    cy.visit('localhost:5173/neworder')

    const index = [0, 1, 2, 3, 4];

    index.forEach(i => {
      cy.get('input[type="checkbox"]').eq(i).check();
    });

  })

  it('form hatasız gönderiliyor mu?', () => {
    cy.visit('localhost:5173/neworder')

    const index = [0, 1, 2, 3, 4];

    cy.get('[type="radio"]').check("Küçük")
    cy.get('select').select("İnce")

    index.forEach(i => {
      cy.get('input[type="checkbox"]').eq(i).check();
    });

    cy.get('[data-cy="isim"]').type("semih");
    cy.get('[data-cy="ekle"]').click();
    cy.get('[data-cy="submit"]').click();

    cy.contains('SİPARİŞ ALINDI').should('be.visible');

  })

})