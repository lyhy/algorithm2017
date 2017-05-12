jest.dontMock('./power-of-four');

describe('power-of-four', function(){
    var func = require('./power-of-four');
    it('power-of-four', function(){
        expect(func()).toEqual(true);

    });
});