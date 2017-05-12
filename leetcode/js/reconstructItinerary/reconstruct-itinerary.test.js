jest.dontMock('./reconstruct-itinerary');

describe('reconstruct-itinerary', function(){
    var func = require('./reconstruct-itinerary');
    it('reconstruct-itinerary', function(){
        expect(func()).toEqual(true);

    });
});