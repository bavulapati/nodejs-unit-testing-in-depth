const chai = require('chai')
const expect = chai.expect

describe('chai test', ()=>{
	it('should compare some values', ()=>{
		expect(1).to.equal(1)
	})

	it('should compare some other stuff', ()=>{
		expect({name:'joe'}).to.deep.equal({name:'joe'})
		expect({name:'joe'}).to.have.property('name').equal('joe')
		expect(5 > 8).to.be.false
		expect({}).to.be.a('object')
		expect('foo').to.be.a('string')
		expect(3).to.be.a('number')
		expect('bar').to.be.a('string').with.lengthOf(3)
		expect([1,2,3].length).equal(3)
		expect(null).to.be.null
		expect(undefined).to.not.exist
		expect(1).to.exist
	})
})