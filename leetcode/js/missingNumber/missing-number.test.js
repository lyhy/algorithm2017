jest.dontMock('./missing-number');

describe('missing-number', function(){
    var func = require('./missing-number');
    it('missing-number', function(){
        expect(func()).toEqual(true);

    });
});