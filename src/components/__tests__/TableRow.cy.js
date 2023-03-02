import TableRow from "@/components/TableRow.vue";

describe("TableRow", () => {
  it("playground", () => {
    cy.mount(TableRow, {
      props: {
        titleNumber: "243751",
        tenure: "Freehold",
      },
    });
  });

  it("renders properly", () => {
    cy.mount(TableRow, {
      props: {
        titleNumber: "243751",
        tenure: "Freehold",
      },
    });
    cy.get(".title-number").should("contain", "243751");
    cy.get(".tenure").should("contain", "Freehold");
  });
});
