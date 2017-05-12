jest.dontMock('./odd-even-linked-list');

describe('odd-even-linked-list', function(){
    var func = require('./odd-even-linked-list');
    it('odd-even-linked-list', function(){
        expect(func()).toEqual(true);

    });
});