jest.dontMock('./repeated-dna-sequences');

describe('repeated-dna-sequences', function(){
    var func = require('./repeated-dna-sequences');
    it('repeated-dna-sequences', function(){
        expect(func()).toEqual(true);

    });
});