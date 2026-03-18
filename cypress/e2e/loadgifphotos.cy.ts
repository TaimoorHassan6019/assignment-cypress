/// <reference types="cypress" />

describe('Loading gif photos', () => {
    it('gifs should get load successfully', () => {
        cy.intercept('GET', '**/v1/gifs/trending*').as('getGifs')

        cy.visit('/')

        cy.wait('@getGifs').then((interception) => {
            expect(interception.response?.statusCode).to.eq(200)
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