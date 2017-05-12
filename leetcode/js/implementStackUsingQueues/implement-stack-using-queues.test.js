jest.dontMock('./implement-stack-using-queues');

describe('implement-stack-using-queues', function(){
    var func = require('./implement-stack-using-queues');
    it('implement-stack-using-queues', function(){
        expect(func()).toEqual(true);

    });
});