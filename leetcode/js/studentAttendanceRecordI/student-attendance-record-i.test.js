jest.dontMock('./student-attendance-record-i');

describe('student-attendance-record-i', function(){
    var func = require('./student-attendance-record-i');
    it('student-attendance-record-i', function(){
        expect(func()).toEqual(true);

    });
});