jest.dontMock('./min-stack');

describe('min-stack', function(){
    var func = require('./min-stack');
    it('min-stack', function(){
        expect(func()).toEqual(true);

    });
});