jest.dontMock('./implement-queue-using-stacks');

describe('implement-queue-using-stacks', function(){
    var func = require('./implement-queue-using-stacks');
    it('implement-queue-using-stacks', function(){
        expect(func()).toEqual(true);

    });
});