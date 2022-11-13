var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#averageOfArray', function() {
        it('should return sum of numbers in array', function() {
            var arraySum = averageOfArray([1, 2, 3, 4]);
            expect(arraySum).to.equal(10)
        })

        it('should throw an error if parameter is not a number', function() {
            expect(function() {
                averageOfArray('string');
            }).to.throw(Error);
        })
    })
})