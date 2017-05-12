jest.dontMock('./power-of-three');

describe('power-of-three', function(){
    var func = require('./power-of-three');
    it('power-of-three', function(){
        expect(func()).toEqual(true);

    });
});