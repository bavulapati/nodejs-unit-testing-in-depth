const addTwoNumbers = require('./index').addTwoNumbers
const expect = require('chai').expect

describe('testing tests and files in the same directory', () => {
    context('addTwoNumbers', () => {
        it('should return number', () => {
            const result = addTwoNumbers(3, 5)
            expect(result).to.be.a('number')
        })

        it('should return number > 5', () => {
            const result = addTwoNumbers(3, 5)
            expect(result).to.be.greaterThan(5)
        })

        it('should return NaN', () =>{
            const result = addTwoNumbers()
            expect(Number.isNaN(result)).to.be.true
        })
    })
})