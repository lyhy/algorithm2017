jest.dontMock('./add-binary');

describe('add-binary', function(){
    var func = require('./add-binary');
    it('add-binary', function(){
        expect(func()).toEqual(true);

    });
});