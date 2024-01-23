/*Nodejs Event Emitter and its working

The concept is simple: emitter objects emit named events that cause previously 
registered listeners to be called. So, an emitter object basically has two main 
features:

----Emitting name events.
----Registering and unregistering listener functions.

Event Emitter is a class that is capable of emitting an event, 
attaching an event and also detaching it. Https and other node js 
core modules use the event emitter class.

Event emitter class calls all the events in the same order in which
 they were registered.

The on() method is used to attach the event handler, this method 
takes a callback function which gets attached to the event. More 
than one function can also be attached to a single event.

The emit() method is used to emit the attached event, basically it 
invokes the attached function. 


In Node.js, an EventEmitter is a core module that provides a way to implement the
 observer pattern. It allows you to create custom objects that emit events, and 
 other objects can listen for and respond to those events. This mechanism is 
 particularly useful for building asynchronous, event-driven applications.
*/