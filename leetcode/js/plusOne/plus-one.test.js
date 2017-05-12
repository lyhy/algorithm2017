jest.dontMock('./plus-one');

describe('plus-one', function(){
    var func = require('./plus-one');
    it('plus-one', function(){
        expect(func()).toEqual(true);

    });
});