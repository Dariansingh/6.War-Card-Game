var expect = chai.expect;

decscribe('MyFunctions', function(){
    describe('#doSomething', function(){
        it('should return arrays flattened into one array', function() {
            var array = newDeck([1, 2], [3, 4]);
            expect(array).to.equal([1, 2, 3, 4])
        })

        it('should throw an error if parameter is not an array', function() {
            expect(function() {
                newDeck('string');
            }).to.throw(Error);
        })
    })
})