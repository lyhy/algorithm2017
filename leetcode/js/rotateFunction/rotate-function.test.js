jest.dontMock('./rotate-function');

describe('rotate-function', function(){
    var func = require('./rotate-function');
    it('rotate-function', function(){
        expect(func()).toEqual(true);

    });
});