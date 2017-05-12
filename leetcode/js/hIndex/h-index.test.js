jest.dontMock('./h-index');

describe('h-index', function(){
    var func = require('./h-index');
    it('h-index', function(){
        expect(func()).toEqual(true);

    });
});