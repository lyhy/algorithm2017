/**
 *
 *
 * Given a number n that represents n lockers and n students. All lockers start closed. First student goes and opens all the lockers. Second goes and toggles 2nd, 4th, 6th.. lockers. Third student toggles 3rd, 6th, 9th.. lockers. Print the lockers that remain open after all students pass.


 public void lockers(int n) {
    // Implementation here
}
 */

var input = 36;

var lockers = function(n) {
    var locked = new Array(n).fill(false);
    for(var i = 1; i <= n; i++){
        for(var j = i; j <= n; j = j + i ){
            locked[j-1] = !locked[j -1];
        }
    }
    return locked;
}

var opened = [];
lockers(input).forEach(function(value, index){
    if(!!value){
        opened.push(index+1)
    }
});
console.log(opened);