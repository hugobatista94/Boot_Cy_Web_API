/// < reference types="cypress"/>

describe('Buscar Dispositivos', () => {

    
    it('Buscar Dispositivo Especifico', () => {

        cy.request({
            method:'GET',
            url: 'https://api.restful-api.dev/objects/7',
            failOnStatusCode: false
        }) 
            .then ((response) => {
                expect(response.status).equal(200)
                expect(response.body.name).equal("Apple MacBook Pro 16")
                expect(response.body.data).not.empty
                expect(response.body.data.year).not.string
                expect(response.body.data.year).equal(2019)
                expect(response.body.data.price).not.string
                expect(response.body.data.price).equal(1849.99)
                expect(response.body.data['CPU model']).not.empty
                expect(response.body.data['Hard disk size']).not.empty
            })
    })

    it('Buscar Dispositivo Inexistente', () => {

        cy.request({
            method:'GET',
            url: 'https://api.restful-api.dev/objects/7654564864894',
            failOnStatusCode: false
        }) 
            .then ((response) => {
                expect(response.status).equal(404)
            })
    })

})