jest.dontMock('./first-missing-positive');

describe('first-missing-positive', function(){
    var func = require('./first-missing-positive');
    it('first-missing-positive', function(){
        expect(func()).toEqual(true);

    });
});