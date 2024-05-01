describe("The home page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("can select platform", () => {
    cy.visit("/");
    cy.get("main select").select("linux");
    cy.contains("main a", "Linux");
    cy.get("main select").select("windows");
    cy.contains("main a", "Windows");
  });

  it("has a link to the licences page", () => {
    cy.visit("/");
    cy.get("nav a").click();
    cy.title().should("include", "Licences");
  });
});

describe("Licences page", () => {
  it("has app and website dependencies", () => {
    cy.visit("/licences");
    cy.get("#TUI");
    cy.get("#Website");
  });

  it("has full text of a licence", () => {
    cy.visit("/licences");
    cy.get("#TUI + details").click();
    cy.get("#TUI + details details").click();
    cy.contains("main details details pre", "copyright");
  });

  it("goes to the home page", () => {
    cy.visit("/licences");
    cy.get("header > a").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
