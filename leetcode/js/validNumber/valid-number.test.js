jest.dontMock('./valid-number');

describe('valid-number', function(){
    var func = require('./valid-number');
    it('valid-number', function(){
        expect(func()).toEqual(true);

    });
});