jest.dontMock('./remove-linked-list-elements');

describe('remove-linked-list-elements', function(){
    var func = require('./remove-linked-list-elements');
    it('remove-linked-list-elements', function(){
        expect(func()).toEqual(true);

    });
});