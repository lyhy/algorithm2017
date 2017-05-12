jest.dontMock('./isomorphic-strings');

describe('isomorphic-strings', function(){
    var func = require('./isomorphic-strings');
    it('isomorphic-strings', function(){
        expect(func()).toEqual(true);

    });
});