jest.dontMock('./fizz-buzz');

describe('fizz-buzz', function(){
    var func = require('./fizz-buzz');
    it('fizz-buzz', function(){
        expect(func()).toEqual(true);

    });
});