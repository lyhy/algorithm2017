jest.dontMock('./insert-interval');

describe('insert-interval', function(){
    var func = require('./insert-interval');
    it('insert-interval', function(){
        expect(func()).toEqual(true);

    });
});