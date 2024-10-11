/// <reference types="cypress"/>


//Funcionalidade
describe('Buscar dispositivos',()=>{

    it("Buscar todos os dispositivos",()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects'
        }).then((response) =>{
            console.log("Minha resposta:",response)

        })
    })
    it("Buscar dispositivo pelo ID",()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/1'
        }).then((response) =>{
            expect(response.status).to.equal(200)

        })
    })
    it.only("Buscar dispositivo passando ID inexistente",()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/155455',
            failOnStatusCode: false
        }).then((response) =>{
            expect(response.status).to.equal(404)
            expect(response.body.error).to.equal("Oject with id=155455 was not found.")

        })
    })
})
