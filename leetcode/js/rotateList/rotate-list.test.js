jest.dontMock('./rotate-list');

describe('rotate-list', function(){
    var func = require('./rotate-list');
    it('rotate-list', function(){
        expect(func()).toEqual(true);

    });
});