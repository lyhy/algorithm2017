jest.dontMock('./implement-strstr');

describe('implement-strstr', function(){
    var func = require('./implement-strstr');
    it('implement-strstr', function(){
        expect(func()).toEqual(true);

    });
});