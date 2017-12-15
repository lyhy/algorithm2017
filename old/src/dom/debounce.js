function debouce(func, wait, immediate){
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if(!immediate)func.apply(context, args);
        }

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}

function callMe(arg){
    console.log('call me ' + arg);
}

function callYou(arg){
    console.log('call you ' + arg);
}

var debounceCallme = debouce(callMe, 300, true);
var debounceCallyou = debouce(callYou, 300, true);
debounceCallme('first');
debounceCallyou('first');
debounceCallme('second');
debounceCallyou('second');
setTimeout(function(){
    debounceCallme('third');
    debounceCallyou('third');
}, 600)
