jest.dontMock('./merge-intervals');

describe('merge-intervals', function(){
    var func = require('./merge-intervals');
    it('merge-intervals', function(){
        expect(func()).toEqual(true);

    });
});