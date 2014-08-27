var assert=require('assert');
var EventEmitter=require('../index.js');
var _=require('underscore');

describe('toString', function(){
        it('should be inheritable', function(done){

                function Mum() { 

                        if (!(this instanceof Mum))
                                throw "this function must be called with the new operator";
                        
                        this.init();
                }

                _.extend(Mum.prototype,EventEmitter.prototype);
                Mum.prototype.parentInit=EventEmitter.prototype.init;

                var timesCalled=0;

                Mum.prototype.init=function() {
                        this.parentInit();
                        this.whatever='I am mum';        
                }

                Mum.prototype.reactToFinishedEating=function() {
                        this.emit('give-order-to-kid');
                        this.emit('give-order-to-kid');
                }

                var mum=new Mum();

                mum.on('give-order-to-kid',function() {
                        timesCalled++;
                });

                mum.on('give-order-to-kid',function() {
                        timesCalled++;
                });

                setTimeout(function() {
                        if(timesCalled!==4)
                                throw "the listeners were not called 4 times but "+timesCalled+" times";
                        done();
                });

                mum.reactToFinishedEating();
                
        });
});
