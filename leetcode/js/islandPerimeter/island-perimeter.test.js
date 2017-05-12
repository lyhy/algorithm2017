jest.dontMock('./island-perimeter');

describe('island-perimeter', function(){
    var func = require('./island-perimeter');
    it('island-perimeter', function(){
        expect(func()).toEqual(true);

    });
});