jest.dontMock('./triangle');

describe('triangle', function(){
    var func = require('./triangle');
    it('triangle', function(){
        expect(func()).toEqual(true);

    });
});