jest.dontMock('./surrounded-regions');

describe('surrounded-regions', function(){
    var func = require('./surrounded-regions');
    it('surrounded-regions', function(){
        expect(func()).toEqual(true);

    });
});