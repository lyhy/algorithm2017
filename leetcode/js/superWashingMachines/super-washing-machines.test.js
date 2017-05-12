jest.dontMock('./super-washing-machines');

describe('super-washing-machines', function(){
    var func = require('./super-washing-machines');
    it('super-washing-machines', function(){
        expect(func()).toEqual(true);

    });
});