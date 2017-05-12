jest.dontMock('./text-justification');

describe('text-justification', function(){
    var func = require('./text-justification');
    it('text-justification', function(){
        expect(func()).toEqual(true);

    });
});