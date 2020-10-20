describe('Blog Test', () => {
    it('Visits the Blog', () => {
      cy.visit('../index.html');
    });

    it('should contain a Nav Bar with relevant headers', () => {
        cy.visit("../index.html");

        const navBarHeaders = ["HOME", "CODING HACKS", "USEFUL INFO", "FEEDBACK"];
        
        navBarHeaders.forEach(header => {
            cy.get('#topnav').contains(header);
        });
    })
  })
