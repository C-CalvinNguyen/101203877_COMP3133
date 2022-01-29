var expect = require('chai').expect
var calculator = require('../app/calculator.js')

describe("Calculates Given Two Numbers", () => {
    describe("Addition", () => {
        it(`add(2, 2) expected result 4`, () => {
            var addPass = calculator.add(2,2)
            expect(addPass).to.equal(4)
        })

        it('add(2,2) expected result 5', () => {
            var addFail = calculator.add(2,2)
            expect(addFail).to.equal(5)
        })
    })

    describe("Subtraction", () => {
        it("sub(10,5) expected result 5", () => {
            var subPass = calculator.sub(10,5)
            expect(subPass).to.equal(5)
        })

        it("sub(10,5) expected result 7", () => {
            var subFail = calculator.sub(10,5)
            expect(subFail).to.equal(7)
        })
    })

    describe("Multiplication", () => {
        it("mul(6,2) expected result 12", () => {
            var mulPass = calculator.mul(6,2)
            expect(mulPass).to.equal(12)
        })
        it("mul(6,2) expected result 18", () => {
            var mulFail = calculator.mul(6,2)
            expect(mulFail).to.equal(18)
        })
    })

    describe("Division", () => {
        it("div(14,7) expected result 2", () => {
            var divPass = calculator.div(14,7)
            expect(divPass).to.equal(2)
        })
        it("div(14,7) expected result 7", () => {
            var divFail = calculator.div(14,7)
            expect(divFail).to.equal(7)
        })
    })
})