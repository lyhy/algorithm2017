jest.dontMock('./expression-add-operators');

describe('expression-add-operators', function(){
    var func = require('./expression-add-operators');
    it('expression-add-operators', function(){
        expect(func()).toEqual(true);

    });
});