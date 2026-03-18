/// <reference types="cypress" />

describe('Module 3 - Scroll till the end', () => {
    it('should request more gifs after scrolling', () => {
        cy.intercept('GET', '**/v1/gifs/trending*').as('getTrendingGifs')

        cy.visit('/')
        cy.wait('@getTrendingGifs', { timeout: 10000 })

        cy.scrollTo('bottom', { duration: 1000, ensureScrollable: false })
        cy.wait(2000)

        cy.get('@getTrendingGifs.all').then((calls: any) => {
            expect(calls.length).to.be.greaterThan(1)
        })
    })
})