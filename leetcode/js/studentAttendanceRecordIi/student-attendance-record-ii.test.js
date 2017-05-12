jest.dontMock('./student-attendance-record-ii');

describe('student-attendance-record-ii', function(){
    var func = require('./student-attendance-record-ii');
    it('student-attendance-record-ii', function(){
        expect(func()).toEqual(true);

    });
});