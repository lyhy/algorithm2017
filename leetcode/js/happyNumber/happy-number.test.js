jest.dontMock('./happy-number');

describe('happy-number', function(){
    var func = require('./happy-number');
    it('happy-number', function(){
        expect(func()).toEqual(true);

    });
});