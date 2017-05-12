jest.dontMock('./count-the-repetitions');

describe('count-the-repetitions', function(){
    var func = require('./count-the-repetitions');
    it('count-the-repetitions', function(){
        expect(func()).toEqual(true);

    });
});