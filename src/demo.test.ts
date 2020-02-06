const demo = require('./demo')
const { expect, use } = require('chai')
const chaiAsPromised = require('chai-as-promised')

use(chaiAsPromised)

describe('testing demo', () => {
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

    context('call back with promise', () => {
        it('should test promise',(done) => {
            demo.addWithPromise(2,3).then((result)=>{
                expect(result).to.equal(5)
                done()
            }).catch((ex) => {
                console.error('caught error', ex)
                done(ex)
            })
        })

        it('should test async/await', async () => {
            await expect(demo.addWithPromise(2, 3)).to.eventually.equal(5)
        })
    })
})
