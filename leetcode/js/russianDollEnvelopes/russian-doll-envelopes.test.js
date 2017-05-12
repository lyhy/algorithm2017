jest.dontMock('./russian-doll-envelopes');

describe('russian-doll-envelopes', function(){
    var func = require('./russian-doll-envelopes');
    it('russian-doll-envelopes', function(){
        expect(func()).toEqual(true);

    });
});