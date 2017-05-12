jest.dontMock('./flatten-nested-list-iterator');

describe('flatten-nested-list-iterator', function(){
    var func = require('./flatten-nested-list-iterator');
    it('flatten-nested-list-iterator', function(){
        expect(func()).toEqual(true);

    });
});