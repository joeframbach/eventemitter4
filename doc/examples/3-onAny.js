var EventEmitter=require('../../index.js');
var emitter=new EventEmitter();

emitter.on('finished-eating',function(who) {
        console.log('clean up the table, '+who+'.');
});

emitter.on('finished-playing-ball',function(who) {
        console.log('go, take a shower, '+who+'.');
});

emitter.onAny(function(who) {
        if(who==='John')
                console.log('yes, mum');
});

emitter.emit('finished-eating','John');
emitter.emit('finished-playing-ball','John');
emitter.emit('finished-playing-ball','Ann');

