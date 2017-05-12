jest.dontMock('./keyboard-row');

describe('keyboard-row', function(){
    var func = require('./keyboard-row');
    it('keyboard-row', function(){
        expect(func()).toEqual(true);

    });
});