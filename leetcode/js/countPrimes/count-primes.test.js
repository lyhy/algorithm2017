jest.dontMock('./count-primes');

describe('count-primes', function(){
    var func = require('./count-primes');
    it('count-primes', function(){
        expect(func()).toEqual(true);

    });
});