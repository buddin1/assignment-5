
#####1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


#####2 How do you create and insert a new element into the DOM?


#####3 What is Event Bubbling and how does it work?


#####4 What is Event Delegation in JavaScript? Why is it useful?


#####5 What is the difference between preventDefault() and stopPropagation() methods?

###1 
getElementById..............if i know the id of a element it will returns that element... Because id is unique and if there is multiple id in same name it will returns the first element

getElementByClassName......if we call this function it will return a collection of element of same class........it is like array..... This collection of element can use in loop, condition etc


querySelector........this function returns the first element that is same name as css selector....it can be any selector like id,class,tag


querySelctorAll......this function will return  every element that has same name as css selector unlike querySelctor.......






###2
........creating element............

 let newDiv = document.createElement("div");
 
newDiv.innerText = "Hello, I am a new div!";

newDiv.className = "box";

.......insert element............ 

document.body.appendChild(newDiv);





###3.
event bubbling is a default behavior of many event like click event it occurs from child node to parent node then further parent then document





###4
Event Delegation is a way to use event listener in parent element instead of using in it every chlid element..........then using event.target we can find which child element trigger the event








####5. 
preventDefault() 
it stops tags or elements normal beheviour ......like it stops forms input submission after click or like link elements link will not not open






stopPropagation() 
 it stops the event from bubbling... it means .  if same time two button clicks one is parent node and another is child node and also if we use this function in child node and click then child nodes function will return and parent function skipped function
