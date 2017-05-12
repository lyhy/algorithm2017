jest.dontMock('./guess-number-higher-or-lower-ii');

describe('guess-number-higher-or-lower-ii', function(){
    var func = require('./guess-number-higher-or-lower-ii');
    it('guess-number-higher-or-lower-ii', function(){
        expect(func()).toEqual(true);

    });
});