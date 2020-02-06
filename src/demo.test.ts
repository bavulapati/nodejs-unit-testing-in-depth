const demo = require('./demo')
const expect = require('chai').expect

describe('testing tests and files in the same directory', () => {
    context('addTwoNumbers', () => {
        it('should return number', () => {
            const result = demo.addTwoNumbers(3, 5)
            expect(result).to.be.a('number')
        })

        it('should return number > 5', () => {
            const result = demo.addTwoNumbers(3, 5)
            expect(result).to.be.greaterThan(5)
        })

        it('should return NaN', () =>{
            const result = demo.addTwoNumbers()
            expect(Number.isNaN(result)).to.be.true
        })
    })

    context('callback add', () => {
        it('should test callback', (done) => {
            demo.addCallback(2,3, (err, result) =>{
                expect(err).to.not.exist
                expect(result).to.equal(5)
                done()
            })
        })
    })
})
