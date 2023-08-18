/// < reference types="cypress"/>

describe('Cadastrar Dispositivo', () => {

    
    it('Cadastrar Dispositivo Especifico', () => {

        cy.request({
            method:'POST',
            url: 'https://api.restful-api.dev/objects/',
            body:{
                "name": "Apple Hugo",
                "data": {
                    "year": 2023,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "2 TB",
                    "Dono do produto": "Hugo"
                        }
                },
            failOnStatusCode: false
        }) 
            .then ((response) => {
                expect(response.status).equal(200)
            })
    })

})