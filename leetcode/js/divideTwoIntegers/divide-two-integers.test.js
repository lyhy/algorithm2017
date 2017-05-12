jest.dontMock('./divide-two-integers');

describe('divide-two-integers', function(){
    var func = require('./divide-two-integers');
    it('divide-two-integers', function(){
        expect(func()).toEqual(true);

    });
});