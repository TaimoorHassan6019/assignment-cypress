/// <reference types="cypress" />

describe('Giphy App Smoke Test', () => {
    it('opens the live app successfully', () => {
        cy.visit('/')
        cy.url().should('include', 'giphy-app-nu.vercel.app')
    })
})