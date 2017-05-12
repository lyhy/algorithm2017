jest.dontMock('./linked-list-cycle');

describe('linked-list-cycle', function(){
    var func = require('./linked-list-cycle');
    it('linked-list-cycle', function(){
        expect(func()).toEqual(true);

    });
});