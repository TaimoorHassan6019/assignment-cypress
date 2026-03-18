/// <reference types="cypress" />

describe('Search', () => {
    it('should search gifs successfully and validate API response', () => {
        cy.intercept('GET', '**/v1/gifs/search*').as('searchGifs')

        cy.visit('/')

        cy.get('input')
            .first()
            .should('be.visible')
            .clear()
            .type('apples{enter}')

        cy.wait('@searchGifs').then((interception) => {
            expect(interception.response?.statusCode).to.eq(200)
            expect(interception.request.url).to.include('q=apples')
            expect(interception.response?.body.data).to.have.length(15)

            interception.response?.body.data.forEach((gif: any) => {
                expect(gif).to.have.property('title')
                expect(gif.images).to.exist
                expect(gif.images.original).to.exist
                expect(gif.images.original.url).to.be.a('string').and.not.be.empty
            })
        })

        cy.get('img').should('have.length.greaterThan', 0)
    })
})