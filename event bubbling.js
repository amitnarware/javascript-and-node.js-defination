//Event Bubbling:


/*
Event bubbling is like throwing a ball into a bucket and watching
 it bounce back up. When an event, such as a button click, happens 
 on an element, it triggers the same event on all its parent 
 elements, one by one, until it reaches the topmost parent or the 
 document. It's like the event bubbles up through the DOM hierarchy.

For example, if you have a button inside a div inside another div,
 and you click the button, the click event will first trigger on 
 the button itself, then on the inner div, and finally on the outer
  div (assuming event handlers are attached). It follows the path
   from the innermost element to the outermost element.
-
//Event Capturing:


Event capturing is like catching a ball as it falls through a 
series of baskets. It's the opposite of event bubbling. When an 
event is triggered on an element, during the capturing phase, 
the event starts from the topmost parent and travels down the DOM 
hierarchy to the target element.

In the previous example, if event capturing is enabled and you
 click the button, the click event will first trigger on the outer 
 div, then on the inner div, and finally on the button itself. It
  follows the path from the topmost parent to the target element.

In Summary:

Event bubbling: Event starts from the element where it occurred and
 bubbles up to the parent elements.
Event capturing: Event starts from the topmost parent and travels
 down to the target element.
By default, in modern web browsers, event bubbling is used. However,
 you can explicitly enable event capturing by passing a third 
 parameter (true) to the addEventListener method.

Understanding event bubbling and capturing is helpful when dealing
 with nested elements and deciding where to attach event handlers.
  It allows for more flexible and efficient event handling in
   JavaScript. */