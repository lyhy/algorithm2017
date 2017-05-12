jest.dontMock('./find-right-interval');

describe('find-right-interval', function(){
    var func = require('./find-right-interval');
    it('find-right-interval', function(){
        expect(func()).toEqual(true);

    });
});