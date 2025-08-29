1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? Ans:getElementById is use for ID only and returns single element. In full html collection every id need to be totally unique from each others to work codes properly. getElementsByClassName is use only for classes and same class-names could be use any class attribute. querySelector and querySelectorAll both are CSS selector while querySelector provide returns from first match .On the other hand querySelectorAll provide returns a node list from all matches. querySelectorAll uses for multi element selection.

2.How do you create and insert a new element into the DOM? 
Ans: In JS by using a document id/class to get the specific HTML part or section and through createElement() DOM at first I have to create a attribute like section, div, ul then I also have to create a HTML in innerHTML as my websites requirement . After that the created specific HTML that need to insert by the given id/class name attribute part by using appendChild() DOM 

3.What is Event Bubbling and how does it work? 
Ans: When an event is triggered on a child element it propagates upward through its ancestors until it get at the last root HTML. And after it triggrered its porpagate like a tree.

4.What is Event Delegation in JavaScript? Why is it useful? 
Ans: Event Delegation is process where we add a event listener (addEventListener) and through the event we able to control the child elements. Its possible only for Event Bubbling where events are propagate from child to parents. Its make the code easy add reusable . Secondly Event Delegation consume less memory from others and also have fast execution. Lastly it can handle the elements dynamiclly because after adding a new child , the parent's event listener work properly.

5.What is the difference between preventDefault() and stopPropagation() methods? 
Ans: preventDefault() Stops the browser’s default behavior and Stops the browser’s default behavior and Prevent parent handlers from firin.Its do not affects bubbling. On the other hand, stopPropagation() Stops the event from bubbling up while its do affects bubbling and prevent parent handlers from firing
