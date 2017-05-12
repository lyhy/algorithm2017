jest.dontMock('./guess-number-higher-or-lower');

describe('guess-number-higher-or-lower', function(){
    var func = require('./guess-number-higher-or-lower');
    it('guess-number-higher-or-lower', function(){
        expect(func()).toEqual(true);

    });
});