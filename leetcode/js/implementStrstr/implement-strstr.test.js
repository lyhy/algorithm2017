jest.dontMock('./implement-strstr');

describe('implement-strstr', function(){
    var func = require('./implement-strstr');
    it('implement-strstr', function(){
        var haystack = 'aberc', needle = 'bc';
        expect(func(haystack, needle)).toEqual(-1);

    });
});