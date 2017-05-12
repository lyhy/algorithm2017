jest.dontMock('./heaters');

describe('heaters', function(){
    var func = require('./heaters');
    it('heaters', function(){
        expect(func()).toEqual(true);

    });
});