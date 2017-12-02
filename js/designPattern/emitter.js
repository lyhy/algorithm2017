//https://netbasal.com/javascript-the-magic-behind-event-emitter-cce3abcbcef9
var EventEmitter = function(){
    this.events = {};
}

EventEmitter.prototype.subscribe = function( eventName, fn ) {
    if( !this.events[eventName] ) {
        this.events[eventName] = [];
    }

    this.events[eventName].push(fn);
}

EventEmitter.prototype.emit = function(eventName, data) {
    const event = this.events[eventName];
    if( event ) {
        event.forEach(fn => {
            fn.call(null, data);
        });
    }
}

var emitter = new EventEmitter();
emitter.subscribe('event:name-changed', function(data) {
    console.log(data.name + ' catched');
});

emitter.emit('event:name-changed', {name: 'wj'});