jest.dontMock('./edit-distance');

describe('edit-distance', function(){
    var func = require('./edit-distance');
    it('edit-distance', function(){
        expect(func()).toEqual(true);

    });
});