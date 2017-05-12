jest.dontMock('./queue-reconstruction-by-height');

describe('queue-reconstruction-by-height', function(){
    var func = require('./queue-reconstruction-by-height');
    it('queue-reconstruction-by-height', function(){
        expect(func()).toEqual(true);

    });
});