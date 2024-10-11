/// <reference types="cypress"/>


//Funcionalidade
describe('Cadastrar dispositivos',()=>{

    it("Cadastrar novo dispositivo",()=>{
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body:{
                "name": "MOTO G34",
                "data":{
                    "year": 2024,
                    "price": 1090,
                    "CPU Model": "Intel core i5",
                    "Hard disk size": "256 Gb"
                }
            }
        }).then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.name).to.equal("MOTO G34")
        })
    })
    
})
