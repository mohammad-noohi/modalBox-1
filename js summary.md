SOURCE IS JAVASCRIPT.INFO AND SABZLEARN COURSE

<!-- episode 3 : how to use js in project -->

internal js and external

<!-- episode 4 : variables -->

link : https://javascript.info/variables

let and var can be reasign but can't redeclare beacuse the identifire must be uniqe

const can't reasign and redeclare

Variable naming
There are two limitations on variable names in JavaScript:

The name must contain only letters, digits, or the symbols $ and \_.
The first character must not be a digit.

Such constants are named using capital letters and underscores.

<!--  episode 5 : Data type  -->

https://javascript.info/types

<!--  episode 6 : comment -->

/_ this is comment with alt+shift+A _/
// ctrl + /

<!-- epsisode 7 : interactionc -->

https://javascript.info/alert-prompt-confirm

We covered 3 browser-specific functions to interact with visitors:

# alert() :

shows a message.

# prompt() :

shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.(prompt always return strnig)

# confirm() :

shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:

The exact location of the modal window is determined by the browser. Usually, it’s in the center.
The exact look of the window also depends on the browser. We can’t modify it.
That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if “bells and whistles” do not matter much, these methods work just fine.

<!-- episode 8 : convert datatype -->

https://javascript.info/type-conversions

# Boolean()

# String()

# Number() ===> shortcut is +

e.g :
let test = '123'
let num = Number(test) or +test

<!-- episode 9 : logical operator -->

# “unary”, “binary”, “operand”

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number
An operator is binary if it has two operands. The same minus exists in binary form as well

# Maths operators

The following math operations are supported:

Addition +,
Subtraction -,
Multiplication \*,
Division /,
Remainder %,
Exponentiation \*\*

String concatenation with binary +
Let’s meet the features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them
Note that if any of the operands is a string, then the other one is converted to a string too. it doesn’t matter whether the first operand is a string or the second one.

Numeric conversion, unary + [+ = Number() ]
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

unary operators are higher precedence than binary operators

# Assingment operators :

=
+=
-=
\*=
/=

# Increment , Decrement operators:

## ++

Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.
(all operators and methods return a value)

As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

# Bitwise operators

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

# comma operator

The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
for example :

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

<!-- episode 11 : concat string -->

operator for concat is +

<!-- episode 12 : what is NaN exactly ? -->

NaN is not a number
typeof NaN is number

<!-- episode 13 : isNaN method : detect value is NaN or not -->

syntax : isNaN( expression )
if expression is NaN return true othewise return false

<!-- episode 14 : comparation operators -->

read this link for more information :
https://javascript.info/comparison

# compration operator

grater than : >
less than : <
grater than or equal: >=
less than or equal: >=
eaqual ( value ): ==
equal( value,type ): ===
not equal( value ): !=
not equal( value,type ): !==

All comparison operators return a boolean value

# String comparison

To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

In other words, strings are compared letter-by-letter.

For example:

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

The algorithm to compare two strings is simple:

1.Compare the first character of both strings.
2.If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3.Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4.Repeat until the end of either string.
5.If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

<!-- episode 15 : use if in javascript -->

# if

# if else

# if else if

if( condition ){
code
}else if( condition ){
code
}else if ( condition ){
code
}
.
.
.
else {
code
}

\*\* else is optinal

we can use ? instead of if :

# ternary operator

? is conditional operator or question mark or ternary operator becouse the operator has three operand

The syntax is:
let result = condition ? value1 : value2;

for example :
let accessAllowed = null; // creat empty variable for store it later

let userAge = +prompt("How old are you ?");

if (userAge >= 18) {
accessAllowed = true;
} else {
accessAllowed = false;
}

alert(accessAllowed);

# we can write code above with ? :

let userAge = +prompt("How old are you ?");
let accessAllowed = (userAge >= 18) ? true : false;
alert(accessAllowed);

or shorter :

let userAge = +prompt('How old are you ?');
( userAge >= 18 ) ? alert(true) : alert(false);

# we can use ? for if else if expresion for e.g :

example :

# 1- normal way :

let userAge = prompt('How old are you ?');

if( userAge < 3 ){
alert('Hi, babay !')
}else if(userAge < 18 ){
alert('Hello!')
}else if(userAge < 100){
alert('Greetings!')
}else{
alert('What an unusual age !')
}

# 2- another way :

let userAge = prompt('How old are you ?');
let message = null;

if( userAge < 3 ){
message = 'Hi, babay !'
}else if(userAge < 18 ){
message = 'Hello!'
}else if(userAge < 100){
message = 'Greetings!'
}else{
message = 'What an unusual age !'
}

alert(message)

# 3- with ? mark :

let userAge = prompt('How old are you ?');
let message = (userAge < 3) ? "Hi, baby!" :
(userAge < 18) ? 'Hello!':
(userAge < 100) ? 'Greetings!':
'What an unusual age !';

alert(message)

<!-- episode 23 : Bitwise or logical operator -->

&& => and
|| => or
! => not
?? => nullish coalescing

# AND operator

( اپراتور و به اولین غلطی که برسه همون رو برمیگردونه اگر هیچ غلطی پیدا نکنه اخری رو برمیگردونه)

true && true ==> run
false && false ===> don't run
true && flase ===> don't run
flase && true ===> don' run

اپراتور و به دنبال اولین مقدار غلط میگردد تا دیگه تموم بشه و کدی اجرا نشه
AND returns the first falsy value or the last value if none were found.
For instance :

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

# OR operator

(اپراتو یا به اولین درستی که برسه اونو برمیگردونه اگر به هیچ درستی نرسه اخری رو برمیگردونه)

true || true ==> run
true || flase ===> run
flase || true ===> run
false || false ===> don't run

a chain of OR || returns the first truthy value or the last one if no truthy value is found

For instance:
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last)

اپراتو یا به دنبال اولین مقدار درست میگردد تا تموم بشه و دیگه کدی اجرا نشه
when or operator reach truthy value stop and the rest of the code in that line don't be execute this feature is call "short-circuit"

true || alert("not printed"); ==> don't show anything
false || alert("printed"); ==> show the alert

Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

# NOT operator

!true => flase
!flase => true

<!-- episode 27 : Switch case -->

A switch statement can replace multiple if checks.
It gives a more descriptive way to compare a value with multiple variants.
The switch has one or more case blocks and an optional default.

It looks like this:

switch(x) {
case 'value1': // if (x === 'value1')
...
[break]

case 'value2': // if (x === 'value2')
...
[break]

default:
...
[break]
}

# breack is optinal but recommended to use it after any case

The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
If no case is matched then the default code is executed (if it exists).

# Grouping of “case”

Several variants of case which share the same code can be grouped.

For example, if we want the same code to run for case 3 and case 5:

let a = 3;

switch (a) {
case 4:
alert('Right!');
break;

case 3: // (\*) grouped two cases
case 5:
alert('Wrong!');
alert("Why don't you take a math class?");
break;

default:
alert('The result is strange. Really.');
}

# Type matters

Let’s emphasize that the equality check is always strict. The values must be of the same type to match.

For example, let’s consider the code:

let arg = prompt("Enter a value?");
switch (arg) {
case '0':
case '1':
alert( 'One or zero' );
break;

case '2':
alert( 'Two' );
break;

case 3:
alert( 'Never executes!' );
break;
default:
alert( 'An unknown value' );
}
For 0, 1, the first alert runs.
For 2 the second alert runs.
But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.

<!-- episode 29 : function declaration -->

please read the document it's important : https://javascript.info/function-basics
special default parameters

To create a function we can use a function declaration.
It looks like this:

function name(parameter1, parameter2, ... parameterN) {
// body
}

Our new function can be called by its name.
For instance:

function showMessage() {
alert( 'Hello everyone!' );
}

showMessage();

# Local variables

A variable declared inside a function is only visible inside that function.
for instance :

function showMessage() {
let message = "Hello, I'm JavaScript!"; // local variable

alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function

# Outer variables

A function can access an outer variable as well,
for instance :

let userName = 'John';

function showMessage() {
let message = 'Hello, ' + userName;
alert(message);
}

showMessage(); // Hello, John

The function has full access to the outer variable. It can modify it as well.

let userName = 'John';

function showMessage() {
userName = "Bob"; // (1) changed the outer variable

let message = 'Hello, ' + userName;
alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

# Parameters and Argument

When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).

# default parameters

If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");
That’s not an error. Such a call would output "_Ann_: undefined". As the value for text isn’t passed, it becomes undefined.

We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
Now if the text parameter is not passed, it will get the value "no text given".

The default value also jumps in if the parameter exists, but strictly equals undefined, like this:

showMessage("Ann", undefined); // Ann: no text given
Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

function showMessage(from, text = anotherFunction()) {
// anotherFunction() only executed if no text given
// its result becomes the value of text
}
Evaluation of default parameters
In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.

On the other hand, it’s independently called every time when text is missing.

Default parameters in old JavaScript code
Several years ago, JavaScript didn’t support the syntax for default parameters. So people used other ways to specify them.

Nowadays, we can come across them in old scripts.

For example, an explicit check for undefined:

function showMessage(from, text) {
if (text === undefined) {
text = 'no text given';
}

alert( from + ": " + text );
}
…Or using the || operator:

function showMessage(from, text) {
// If the value of text is falsy, assign the default value
// this assumes that text == "" is the same as no text at all
text = text || 'no text given';
...
}
Alternative default parameters
Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.

We can check if the parameter is passed during the function execution, by comparing it with undefined:

function showMessage(text) {
// ...

if (text === undefined) { // if the parameter is missing
text = 'empty message';
}

alert(text);
}

showMessage(); // empty message
…Or we could use the || operator:

function showMessage(text) {
// if text is undefined or otherwise falsy, set it to 'empty'
text = text || 'empty';
...
}
Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:

function showCount(count) {
// if count is undefined or null, show "unknown"
alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

# Returning a value

A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:

function sum(a, b) {
return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).

There may be many occurrences of return in a single function. For instance:

function checkAge(age) {
if (age >= 18) {
return true;
} else {
return confirm('Do you have permission from your parents?');
}
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
alert( 'Access granted' );
} else {
alert( 'Access denied' );
}
It is possible to use return without a value. That causes the function to exit immediately.

For example:

function showMovie(age) {
if ( !checkAge(age) ) {
return;
}

alert( "Showing you the movie" ); // (\*)
// ...
}
In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert.

A function with an empty return or without it returns undefined
If a function does not return a value, it is the same as if it returns undefined:

function doNothing() { /_ empty _/ }

alert( doNothing() === undefined ); // true
An empty return is also the same as return undefined:

function doNothing() {
return;
}

alert( doNothing() === undefined ); // true
Never add a newline between return and the value
For a long expression in return, it might be tempting to put it on a separate line, like this:

return
(some + long + expression + or + whatever \* f(a) + f(b))
That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

return;
(some + long + expression + or + whatever \* f(a) + f(b))
So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

return (
some + long + expression

- or +
  whatever \* f(a) + f(b)
  )
  And it will work just as we expect it to.

# Naming a function

Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with "show" usually show something.

Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.

<!-- episode 36 : string property and methodes -->

https://www.w3schools.com/jsref/jsref_obj_string.asp

string like array has index that mean the index is number of character in string
and start from 0 to n for example :

let userName = 'mohammad';
console.log(userName[0]) ==> m
console.log(userName[1]) ==> o
console.log(userName[0]) ==> h
.
.
.

length property : this property show the number of character in string for example :

let userName = 'mohammad';
console.log(userName.length) ==> 8

<!-- episode 38 : string method -->

let str = "I Love JavaScript";

# charAt() => finde special character with index number and return character

console.log(str.charAt(0)); // => I
console.log(str.charAt(1)); // => space
console.log(str.charAt(2)); // => L
console.log(str.charAt(3)); // => o

# charCodeAt() => finde special character with index number BUT return ascii number of character ( ascii code of uppercase letter and lowercase letter is diffrent)

console.log(str.charCodeAt(0)); // code of I is : 73 this is ascii code of I
console.log(str.charCodeAt(1)); // code of space is : 32
console.log(str.charCodeAt(2)); // code of L is : 76

# concat() or + => concat a string to a another string

console.log(str + " & react"); // => 'I Love JavaScript & react'
console.log(str.concat(" & react")); // => 'I Love JavaScript & react'
console.log(str.concat(" and php and java and html")); // => 'I Love JavaScript and php and java nad html'

# trim() ==> remove space from start and end of string

# trimStart() ==> remove spcae form start of string

# trimEnd() ==> remove space frome end of string

let str2 = ' I Love JavaScript ';
console.log(str2)
console.log(str2.trim())
console.log(str2.trimStart())
console.log(str2.trimEnd())

# toUpperCase() => all string became uppercase

# toLoweCase() => all string became lowercase

console.log(str.toUpperCase());
console.log(str.toLowerCase());

# search ( string ) => search in string to finde word and return index of strart word in string in otherhand return start index postion

console.log(str.search('Love')) // => 2
console.log(str.search('Java')); // => 7
console.log(str.search('ali')) // => -1 ( when can't find )

# indexOf( string )

console.log(str.indexOf('Love')); // => 2
console.log(str.indexOf('Java')); // => 7
console.log(str.indexOf('ali')) // => -1 ( when can't find )

# includes( string ) => returns true if a string contains specified value

console.log(str.includes('Love')) // => ture
console.log(str.includes('ali')); // => false

# slice( start index , end index)

# substr( start index , length )

# substring( start index , end index )

<!-- episode 41 : Math method and properties -->

# PI = 3.141592653589793

# عدد پی

console.log(Math.PI)

# power or exponention

# توان

console.log(Math.pow(2,3))

# square toot of number

# جذر

console.log(Math.sqrt(16))

# absolute

# قدرملطق

console.log(Math.abs(2))
console.log(Math.abs(-2))

# min

# مینیمم

console.log(Math.min(1, 4, 55 , 32 , 21 , 12))

# max

# ماکسیمم

console.log(Math.max(1, 4, 55 , 32 , 21 , 12))

# floor & trunc

# floor => همیشه به سمت پایین گرد میکنه مثل براکت توی ریاضی

# trunc => اعشار رو فقط حذف میکنه و گرد نمیکنه

console.log(Math.floor(12.2)) // => 12
console.log(Math.trunc(12.3)) // => 12
console.log(Math.floor(-12.3)) // => -13
console.log(Math.floor(-12.3)) // => -12

# ceil

# گرد کردن به سمت بالا

console.log(Math.ceil(12.8))

# round

# گرد کردن : اگر اعشار کمتر از نیم باشه به سمت پایین و اگر بیشتر باشه یا برابر نیم باشه به سمت بالا گرد میشه

console.log(Math.round(9.5))
console.log(Math.round(9.7))
console.log(Math.round(9.3))

# random

# گرفتن عدد رندوم

console.log(Math.random()) // return a number between 0 - 1
console.log(Math.random() \* 10) // return a number between of 0 - 10

# generate random number between specified range

include st
console.log(Math.floor(Math.random() \* (max - min + 1) + min));

for example : number between 10 to 100
console.log(Math.floor(Math.random() \* (91) + 10))

<!-- episode 43 : assignment operators -->

= assign a value
+= reassing new value to before value
-= reassing new value to before value
\*= reassing new value to before value
/= reassing new value to before value
\*\*= reassing new value to before value

# increament => ++

# decrement => --

(x is variable)
postfix increment/decrement ==> X++ / X--
prefix decrement/decrement ==> ++X / --X

تفاوت بین اینکه این علامت رو قبل بذاریم یا بعد چیه ؟
تفاوتش موقعی مشخص میشه که بخوایم به یه متغییر جدید اساین کنیم
ولی خب چه اساین بکنی یا نه مقدار اولیه رو داری تغییر میدی اینو حتما دقت کن

for postfix :

let number1 = 0 ;
let number2 = number1++;
console.log(number1) // => 1
console.log(number2) // => 0

for prefix :

let number1 = 0 ;
let number2 = ++number1 ;
console.log(number1) // => 1
console.log(number2) // => 1

summary : prefix return new value but postfix return old value and both of them change the refrence

<!-- episode 45 : how to work with loop -->

https://javascript.info/while-for

if we need inifinte loop just write : while( true ) or for(;;)
if don't write ; in for pranteses you get error in code

# Summary

We covered 3 types of loops:

# while

while – The condition is checked before each iteration.

# do while

do..while – The condition is checked after each iteration.

# for

for (;;) – The condition is checked before each iteration, additional settings available.
To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

# Labels for break/continue

Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2):

for (let i = 0; i < 3; i++) {

for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?

}
}

alert('Done!');
We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

A label is an identifier with a colon before a loop:

labelName: for (...) {
...
}
The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...

}
}

alert('Done!');
In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

So the control goes straight from (\*) to alert('Done!').

We can also move the label onto a separate line:

outer:
for (let i = 0; i < 3; i++) { ... }
The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

<!-- episode 59 : how to work with arrays -->

let students = ['ali','mohammad','hasan'];

# index in arrays

console.log(students[1]) ==> mohammad
console.log(students[0]) ==> ali

# length in array

console.log(students.length) ==> 3 (this is count of items in array)

<!-- episode 60 : methodes of array => pop / push / shift / unshift -->

\*\*\* for save value of function or method returns it just save a method in variable for example :

let test = method()

# pop()

pop remove last item from any array and return it if the array is empty return
undefinde and array is not change

for example :

et scores = [11 , 19 , 20 , 16 , 17];

let lastItemRemove = scores.pop()

console.log(scores); => [11 , 19 , 20 , 16]
console.log(lastItemRemove); => 17

# push() => you can add one or more items

push add one or more items to end of array and return a new length of array

for example :

let scores = [11 , 19 , 20 , 16 , 17];

let newLength = scores.push(12)

console.log(scores); => [ 11 , 19 , 20 , 16 , 17 , 12]
console.log(newLength) => 6 ( new length of array after add items)

# shift()

remove first item of array and return it

for example :
let scores = [11 , 19 , 20 , 16 , 17];

let removeFirstItem = scores.shift()

console.log(scores) => [ 19 , 20 , 16 , 17]
console.log(removeFirstItem) => 11

# unshift()

add one or more items to start of array and return a new length of array

for example :
let scores = [11 , 19 , 20 , 16 , 17];

let newLength = scores.unshift(12)

console.log(scores) =>[ 12, 11, 19 ,20, 16 ,17]
console.log(newLength) => 6

<!-- episod 62 : object -->

we use key instead of index in array but both of them ( index , key) work same

# how to create an object

let obj = {
key : value,
key : value,
.
.
.
}

# how to access property and method in objects in two ways

cosole.log(obj['key'])
console.log(obj.key)

we use object for save data and combined with array to create database
for example use array and objects to save users data or products data :

let users = [
{
name: "ali",
e_mail: "ali@gmail.com",
phone: 09133456789,
id: 1,
},
{
name: "hosein",
e_mail: "hosein@gmail.com",
phone: 09117895473,
id: 2,
},
{
name: "mohammad",
e_mail: "noohi1998@gmail.com",
phone: 09304185554,
id: 3,
},
];

console.log(users[0]['name']) => ali
console.log(users[0].name) => ali

 <!-- episod 64 : foreach ( method of array ) -->

https://www.w3schools.com/jsref/jsref_foreach.asp
حتما اینو بخون این خیلی کامله

foreach is method just for array and use for reapeat a code in count of items in array
این متد فقط برای ارایه ها استفاده میشه و برای پیمایش روی ارایه ها یعنی به تعداد ایتم های ارایه یه کدی رو تکرار میکنه
میشه از متد های فور هم استفاده کرد و هم فور اف

example :

let arr = ['ali' , 'amir' , 'hosein' , 'akbar']

arr.forEach(function(item){
console.log(item)
})

result :
ali
amir
hosein
akbar

برای پیمایش میتونیم از این دو روش زیر استفاده کنیم

for of loop :

for(let element of arr){
console.log(element)
}

for :

for(let i = 0 ; i < arr.length ; i++){
console.log(arr[i])
}

این متد چیزی رو برنمیگردونه و حتی نمیشه براش تعریف کرد

<!-- episode 66 : includes ( method of array ) -->

# includes method : ( for string and array )

این متد زمانی کاربرد دارد که ایتم های درون ارایه ابجکت نباشند و مثلا عدد یا متن یا بولین و .. باشند

for search in array and find spcify item use includes if the item be exsit return true if not exsit return false
this method get two paramet the first one is item you want search and the second parameter is index of start search in array and the second parameter in default is 0
( includes use for string and array )

for example :

// users database
let users = ['amin' , 'mohammad' , 'hosein' , 'ali' , 'fatemeh'];

// get user name from user
let userName = prompt('Enter your user name : '); // string

// check user name exisit or not
let isLogin = users.includes(userName); // true or false

if(isLogin){
alert('The username is exit')
}else{
alert('Welcom to site')
}

این متد یه سری محدودیت ها داره که متد بعدی این مشکل رو رفع میکنه

<!-- episode 67 : some method -->

این قسمت رو حتما توی ویدیو ببین اگر خوب متوجه نشدی

# some method : ( for array )

some like foreach and like includes but has a diffrent and better than other

با متد فورایچ یه کدی رو به تعداد ایتم های ارایه تکرار میکنیم
اما یه بدی هم این متد داره اینکه شاید ما بخوایم توی ارایه صرفا پیمایش کنیم و وقتی به جواب رسیدم پیمایش تموم بشه اما این متد تا اخرین ایتم اون کد رو تکرار میکنه
با متد اینکلود میایم و یه ایتم رو توی ارایه ها سرچ میکنیم اما یه محدودیت داریم اینکه اگر ایتم هایی که توی ارایه هستند از نوع ابجکت باشند نمیشه با این متد سرچ کرد

اما :

متد سام ترکیبی از این دوتاست یعنی میتونی هم ابجکت ها رو توی ارایه ها سرچ کنی و همین که وقتی به جوابت رسیدی تکرار رو متوقف کنه و این متد یه مقدار بولین رو برمیگردونه
// includes and some methods return true or false

مثال:

let users = ['amin' , 'mohammad' , 'hosein' , 'ali' , 'fatemeh'];
let userName = prompt('Enter user name')

let isLogin = users.some(function(item){
return item == userName
})
console.log(isLogin) // => true or false

BUT :

let arr = ['ali' , 'mohammad' , 'hosein' , 'maryam'];
let userName = prompt('Enter user name : ')

let resutl = arr.forEach(function(item){
return item == userName
})
console.log(resutl) // ==> undefind

so we use some instead of foreach and includes somtimes in this position we use some method :

let users = [
{id : 1 , name : 'ali' , age : 23},
{id : 2 , name : 'hasan' , age : 12},
{id : 3 , name : 'atabak' , age : 20}
]

let isInUsers = users.some(function(item){
console.log(item) // => تاببینی چندبار اجرا میکنه و وقتی به جواب میرسه تموم میشه و دیگه تکرار نمیکنه
return item.name == 'hasan'
})

به مثال زیر خوب دقت کن حتما برو درس ۷۳ رو نگاه کن

let allProducts = [
{id : 1 , name : 'laptop' , price : 17000000 },
{id : 1 , name : 'laptop' , price : 17000000 },
{id : 1 , name : 'laptop' , price : 17000000 },
{id : 1 , name : 'laptop' , price : 17000000 },
{id : 1 , name : 'laptop' , price : 17000000 },
]

let userProductName = prompt('Enter your product : ');
let productData;

let isInShop = allProducts.some(function(product){
if(userProductName == product.name){
productData = product;
return true;
}
})

### notice : usually database is array of objects

console.log(isInUsers)

<!-- episode 69 : every method -->

this method( every ) check a conditon for all itmes of array when a condition be true check condition for next item and if condition be false return false and if all items have a conditon return true

some method repeat a code for all items of array when get to answer ( when get true ) return true

دقت بکن این متدها در دل خودشون یه حلقه دارند و برای هرکدوم یه وظیفه تعریف شده که وقتی بهش برسند حلقه متوقف میشه مثلا متد سام وقتی به ایتمی از ارایه ها برسه که شرط ما رو داشته باشه متوقف میشه و مقدار صحیح رو برمیگردونه در غیر اینصورت مقدار غلط رو برمیگردونه اما متد اوری شرط رو برای همه ی ایتم های ارایه چک میکنه اگر همه ایتم ها اون شرط رو داشتن که مقدار صحیح رو برمیگردونه در غیر اینصورت مقدار غلط رو برمیگردونه و حلقه رو متوقف میکنه

پس این متد ها یه جورایی حلقه هستند و برای پیمایش روی ارایه ها استفاده میشن

example :

let arr = [10, 20, 30, 40, 50];

let result = arr.every(function(item){
return item > 5
});

console.log(result) // ==> true

example :

let allUsers = [
{id : 1 , name : 'ali' , age : 15},
{id : 2 , name : 'maryam' , age : 22},
{id : 3 , name : 'hasan' , age : 34},
{id : 4 , name : 'mohammad' , age : 29},
{id : 5 , name : 'milad' , age : 54},
{id : 6 , name : 'amir' , age : 30},
]

let isAdult = allUsers.every(function(item){
return item.age > 18;
})
console.log(isAdult) // ==> false

<!-- episode 71 : splice method -->

splice method remove elements from an array and if necessary insert new elements in their place and return an array containig the elements that were deleted

first parameter : number ( The zero-based location in the array from which to start removing elements.)

second parameter : number ( the number of elements to remove )

when we set first parameter to 0 and don't set second parameter all items of array will be remove if specify first parameter and don't specify second parameter start remove from first parameter to end and if specify both parameter just remove elements that we want and after these parameter we can specify one or more new element to replce removed elements

# example 1:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removedElements = arr.splice(0) // remove all items and we have empty array => []
console.log(arr) // => []
console.log(removedElements) // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# example 2 :

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removedElements = arr.splice(2) // form index 2 to end remove all items
console.log(arr) // => [1,2]
console.log(removedElements) // => [3,4,5,6,7,8,9,10]

# example 3 :

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removedElements = arr.splice(2,3) // remove elements from index 2 and remove 3 items
console.log(arr) // => [1,2,6,7,8,9,10]
console.log(removedElements) // => [3,4,5]

# example 4 :

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let removedElements = arr.splice(2,3,'ali','hosein') // remove elements from index 2 and remove 3 items and insert two new elements in their place
console.log(arr) // => [1,2,'ali','hosein',6,7,8,9,10]
console.log(removedElements) // => [3,4,5]

#### we can use splice instead of pop / push / shift / unshift

for example :

let removedItems = arr.splice(0,1) // shift

let removedItems = arr.splice(arr.length - 1,1) // pop

let removedItems = arr.splice(arr.length,0,'ali') // push

let removedItems = arr.splice(0,0,'ali') // unshift

<!-- episode 72 : findindex -->

findindex just like some / every check a condition
this method search an item has a condition and if be exist return the index if dosen't be exitst return -1

example :

let allUsers = [
{id : 1 , name : 'ali' , age : 14},
{id : 2 , name : 'maryam' , age : 22},
{id : 3 , name : 'hasan' , age : 34},
{id : 4 , name : 'mohammad' , age : 29},
{id : 5 , name : 'milad' , age : 54},
{id : 6 , name : 'amir' , age : 30},
]

let userIndex = allUsers.findIndex(function(item){
return item.name === 'mohammad'
})

console.log('index : ' + userIndex)

<!-- episdoe 74 : How to work with map method -->

with map we can do action on all items of array and return result .
map method return array and repeat action to the end of array

diffrent between foreach and map :
map return result but foreach doesn't return result

یعنی با متد مپ میتونی یه آرایه جدید از روی یه آرایه دیگه بسازی
ولی آرایه اصلی تغییری نمیکنه

example :

let grades = [ 2, 8 , 4, 9 , 10];

let result = grades.map(function(item){
return item \*\* 2;
})

اما کار نشد نداره اگر بخوای ارایه اصلی رو تغییر بدی کافیه ارایه جدید رو به ارایه قبلی اساین کنی

let grades = [ 2, 8 , 4, 9 , 10];

let result = grades.map(function(item){
return item \*\* 2;
})

grades = result;

<!-- episode 75 : filter method -->

میاد با توجه به شرطی که میذاری اون ایتم هایی که توی ارایه اون شرط رو دارند میگیره و یه جای دیگه ذخیره میکنه به این میگن فیلتر کردن اما ارایه اصلی رو تغییر نمیدن حواست باشه

# پس متدهای زیر ارایه اصلی رو تغییر نمیدن :

includes
some
every
findIndex
map => البته اگر ارایه جدید رو به قبلی اساین کنی میتونی تغییر بدی
filter => البته اگر ارایه جدید رو به قبلی اساین کنی میتونی تغییر بدی

# اما متد های زیر ارایه اصلی رو تغییر میدن :

pop
push
shift
unshift
splice

### includes , some , every return a boolean ( true or flase ) but map and filter and splice return a new value / pop and shift return removed item and push and unshift return new length of array

let scores = [90, 23, 56, 89, 75, 56, 12];

let evenNumber = scores.filter(function(item){
return item % 2 == 0
})
console.log(evenNumber)

<!-- episode 77 : string and array methodes -->

# isArray

to find out somthing is array or not use this method from Array object this method return a boolean value :

let scores = [ 90 , 30 ,22 , 45 ,87 ,73];
console.log(Array.isArray(scores)) // => true

# indexOf

# lastIndexOf

these methodes search in array if our item exist in array return index of that item if dosn't exist return -1 but the indexOf search from start and lastIndexOf search from end of array and we can set second parameter to these method for where start searching

example :

let scores = [90, 23, 56, 89, 75, 56, 12];
console.log(scores.indexOf(56)); // => 2
console.log(scores.lastIndexOf(56)); // => 5

# slice

slice get copy form a part or whole of array and don't change the refrence and return an array with items copied
But splice delete some items and can replace it and change the refrence

example for find out diffrent of slice and splice :

let scores = [90, 23, 56, 89, 75, 56, 12];
let test = scores.slice(2,5)
console.log(test); // =>  [56, 89, 75]
console.log(scores); // => [90, 23, 56, 89, 75, 56, 12]

let result = scores.splice(2,3);
console.log(result) // => [56, 89, 75]
console.log(scores) // => [90, 23, 56, 12]

slice tacke two parameters the first one is start position and second is end position and if we don't set parameters or just set 0 => slice tacke a copy from whole of array

example :

let scores = [90, 23, 56, 89, 75, 56, 12];
let test = scores.slice();
console.log(test)

let scores = [90, 23, 56, 89, 75, 56, 12];
let test = scores.slice(0);
console.log(test)

both of above codes return whole of array

# toString()

# join()

toString and join convert an array to string but in join method we can set the character between items of array

example :

let scores = [90, 23, 56, 89, 75, 56, 12];

let joinResult = scores.join(' \* ');
let toStringResult = scores.toString();
let test = scores.join('') // => remove (,)

console.log(joinResult) // => 90 _ 23 _ 56 _ 89 _ 75 _ 56 _ 12
console.log(toStringResult) // => 90,23,56,89,75,56,12
console.log(test) // => 90235689755612

# reverse()

reveres an array and return it

let arr = [23,12,89,90,54,71];
let revesArr = arr.reverse();
console.log(revesArr)

# split()

conver a string to an array and get one parameter and the parameter should be string the parameter is sepretor

example :

let userName = 'mohmmad';
let arr = userName.split('') // send empty string for parameter
cosole.log(arr) // => ['m','o','h','m','m','a','d']

let myName = 'mohammad noohi esfahani'
let result = myName.split(' ') // => send space for seprator
console.log(result) // => ['mohammad','noohi','esfahani']

let str = 'ali/hasan/hosein/akbar/amir'
let test = str.split('/');
console.log(test); // => ['ali','hasan','hosein','akbar','amir'];

<!-- episode 79 : Best practice in javaScript -->

go to this website and read document this is required for js developres
and take a seprate note for this

https://good.js.org

<!-- episode 82 : Diffrences between primitive and refrence datatypes -->

we have two type of data :

primitive : number / string / boolean / null / undefined / bigint / symbol

refrence : object / array / function

اگر یه متغییر بسازی وبهش یه مقدار پرمیتیو بدی مثل یه عدد و بعد یه متغییر دیگه بسازی و متغییر اول رو بهش اساین کنی هردو داری یه مقدار هستند حالا نکته ای که هست اینه که اگر متغییر دوم رو تغییر بدی اولی تغییری نمیکنه دقیقا مثل کپی گرفتن از یک برگه که اگر شما کپی رو تغییر بدی تغییری توی برگه اصلی رخ نمیده
اما
توی دیتاهای رفرنسی این داستان فرق میکنه مثلا اگر یه متغییر داشته باشی و یه ارایه رو توش ذخیره کرده باشی و یه متغییر دومی بسازی و متغییر اول رو بهش اساین کنی و بعد بیای و متغییر دوم رو تغییر بدی متغییر اول هم تغییر میکنه چون از نوع رفرنس هستند و هنوز باهم در ارتباط هستند یعنی ما کپی نگرفتیم و اینجا الان متغییر دوم داره اشاره میکنه به متغییر اول همین یعنی انگار این ارایه دوتا اسم داره

برای فهم بیشتر به مثال های زیر دقت کن :

## this example for primitive datatype

let num1 = 10;
let num2 = num1;

num2 = 23 ; // change the copy

console.log(num1) // => 10
console.log(num2) // => 23

## this example for refrence datatype

let arr1 = ['amin','hosein','ali','reza'];
let arr2 = arr1;

arr2.push('hasan') // change the copy

console.log(arr1) // => ['amin','hosein','ali','reza','hasan']
console.log(arr2) // => ['amin','hosein','ali','reza','hasan']

# copy and refrence are seprate in primitive datatype

# copy and refrence are conect in refrence datatype

# note :

it's better each function do one action not many action

<!-- episode 86 : find method ( for array ) -->

This method search in your array and if find your item return the item and finish the function
But some when finde your item return true and findIndex when finde your item return index of that are you understand ?
یعنی اینطوری حفظش کن که :
متد سام میاد شرطی که گذاشتی رو برای همه ی ایتم های ارایه چک میکنه و اگر ایتمی اون شرط رو داشت مقدار صحیح رو میده و دیگه ادامه نمیده و متد فایندایندکس میاد شرطی که گذاشتی رو برای همه ی ارایه ها چک میکنه اگر ایتمی اون شرط رو داشت میاد و ایندکس اون ایتم رو بهت میده و دیگه ادامه نمیده
اما
متد فایند میاد شرطی که گذاشتی رو چک میکنه و اگر ایتمی اون شرط رو داشت میاد خود ایتم رو بهت میده و دیگه ادامه نمیده و اگر موردی رو پیدا نکنه اندیفایند رو برمیگردونه

example : ( password forgetting ) :

let allUsers = [
{
id: 1,
username: "noohi1998",
passwrord: "smn1377",
},
{
id: 2,
username: "sattarEm",
passwrord: "str1998-em",
},
{
id: 3,
username: "elham",
passwrord: "eli2020",
},
{
id: 4,
username: "hasti",
passwrord: "hs5543",
},
];

// get username
let userName = prompt("Enter your username to see your password : ");

// check username is in database or not
let userData = allUsers.find(function (item) {
return item.username === userName;
});

// show user password
if (userData) {
alert(userData.passwrord);
} else {
alert("username is wrong try again");
}

<!-- episod 88 : How to user eval method -->

This method get a string like code and excute it this method use mostly for create calculator But

# NEVER use this method

توی این متد میتونی هر کدی که توی جی اس مینویسی رو بذاری و اون کد اجرا میشه هرچی میتونی بنویسی هرچی و بیشتر برای ساخت ماشین حساب استفاده میشه

اما هیچ وقت از این متد استفاده نمیکنیم چون مشکلات و باگ های امنیتی زیادی داره

<!-- episod 89 : Why should not use eval method ( eval is evil ) -->

اول اینکه اگر قراره از کاربر اینپوتی رو بگیری و کاربر میتونه یه کد مخرب رو توی اون اینپوت بذاره و سایت رو هک کنه پس مشکل امنیتی میذاره و اینکه سرعت اجرای این کد بسیار پایین است پس این متد رو استفاده نکن

<!-- episode 90 : Anonymouse function and IIFE function -->

# Anonymouse function

when a function dosn't hava a name call anonymouse function for example we use function in these methodes : some / findIndex / find / filter ,....
and these methodes ara anonymouse function beacause they don't hava a name

arr.filter(function(item){
return item.id === '1';
})

==> function abow is anonymouse function

به توابعی که نام و نشان ندارند میگن توابع بی نام همین صرفا یه اصطلاحه

# IIFE function (IIFE : immediately invoked function : تابع خود خوان)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

/ تابعی که خودش خودش را فراخوانی میکند واجرا میشود و نیازی نیست ما برای اجرای این تابع صداش بزنیم

syntax of IIFE function :
this syntax is better

(function (){
alert("This is IIFE function")
}());

another syntax :

(function(){
alert('This is IIFE function')
})()

we write () after {} of function

IIFE use for create library and cdn or plugins and use rar in js

<!-- episode 92 : setInterval & clearInterval -->

setInterval get two parameters : the first one is a function and second one is a time in milisecond and excute function each time that we set and for finish the excute of function at the first we should save a method in varibales and use that name with clearInterval method to finish it.

These method very usefull for make timer and counter

for example :

let sec = 0;

let timer = setInterval(function(){
console.log(sec);
sec++;
},1000)

<!-- episode 94 : falsy and truthy value in js -->

all data in js can convert to boolean numbers - strings ,... are true or false

# numbers in boolean :

all numbers in boolean are truthy value except 0 and -0 are false

# strings in boolean :

all strings in boolean are truethy value except empty string

# boolean value in boolean

true is true and false is false

use Boolean() method to find truthy and falsy value for example :

Boolean(23) ==> true
Boolean(0) ==> false
Boolean('test') ==> true
Boolean('') ==> false

# undefind

is falsy value

# NaN

is falsy value

# array

all arrays even empty array are truthy value

# object

all objects even empty object are truthy value

<!-- episode 95 : How to use setTimeout() -->

# setTimeout and setInterval return an id , id is number and save the id in variable when you want use clearTimeout or clearInterval you need this id

The setTimeout() is executed only once.
If you need repeated executions, use setInterval() instead.
Use the clearTimeout() method to prevent the function from starting.
To clear a timeout, use the id returned from setTimeout():
myTimeout = setTimeout(function, milliseconds);
Then you can to stop the execution by calling clearTimeout():
clearTimeout(myTimeout);

Syntax :

setTimeout(function, milliseconds, param1, param2, ...)

function Required.
milliseconds is Optional : Number of milliseconds to wait before executing.Default value is 0.
parm1,param2,.. are optional : parameters to pass to the function

<!-- episode 97 : application of flag in programming -->

A flag variable mainly acts as a boolean variable to have a value till a particular condition is satisfied. This variable is used to direct the execution of a function or statement and check for particular circumstances when the function is running.

# flag varibale example :

let userName = prompt('Enter your username');
let users = ['ali' , 'amin','amir','babak'];

// This is flag varibale
let loginFalg = false;

for(let i = 0 ; i < users.length ; i++){
if(users[i] === userName){
loginFalg = true;
}
}

if(loginFalg){
alert("you are logged")
}else{
alert("you are not registerd")
}

// فلگ ها در واقع یه سری متغییرهای کمکی هستند که به خودی خود تعریف و معنایی ندارند و صرفا به ما کمک میکنند تا اجرای کدهامون رو مدیریت کنیم همین مثل الان

// در واقع فلگ ها یه مقدار بولین به صورت پیشفرض دارند که تحت شرایط خاصی اون مقدار تغییر میکنه و بعد ما با توجه به مقدار این متغییر تعیین میکنیم که یه کد یا تابع و... اجرا بشه یا نه صرفا یه اصطلاحه همین

<!-- episdoe 98 : concept of hoisting -->

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting is not a term normatively defined in the ECMAScript specification.

for example :

num1 = 10 ; // intialize
console.log(num1) // ==> no problem and show 10
let num1; // declaration

But hoisting dont occur for let or consat variables :

num1 = 10;
console.log(num1); // ==> we got error
let num1;

for example :

showValue()

function showValue(){
console.log('test')
}

the code run and no problem beacause this is function declaration and occur hoisting

But hoisting for function expression don't occur :

showValue()

let showValue = function(){
console.log('test')
}

we got error

<!-- episode 99 : role of let and const keyword in js -->

# diffrent of var let const :

1- in var we can initialize and reasign more than one and
2- in let we can just reasign more than one
3- in const we can't do anything
4- for var occur hoisting but for let don't occur
5- we can't access to block scope variable with let keyword in global scope beacause their are seprate but in var we can access to block scope variable in global scope fro example :

let num = 20 ;

{
let num = 30 ;
console.log(num) // => show 30
}

console.log(num) // => show 20

But :

var num = 20 ;

{
var num = 30 ;
console.log(num) // => show 30
}

console.log(num) // => show 30

example :

# var

var test = 4 ; // declare and initialize
test = 39 ; // reasign and no problem
var test = 40 ; // declare and initialize again and no problem

console.log(test)

# let

let test = 4 ; // declare and initialize
test = 39 ; // reasign and no problem
let test = 40 ; // declare and initialize again and have error

console.log(test)

# cosnt

const test = 4 ; // declare and initialize
test = 39 ; // reasign and and have error
const test = 40; // declare and initialize again and have error

console.log(test)

<!-- review -->

/_
All methodes of array :
pop()
push()
shift()
unshift()
foreach()
includes()
some()
every()
splice()
findIndex()
map()
filter()
Array.isArray()
indexOf()
lastIndexOf()
slice()
toString()
join()
reverse()
_/

/_
All methodes in string :
charAt()
charCodeAt()
toLowerCase()
toUppreCase()
trimStart()
trimEnd()
trim()
includes()
concat()
search()
indexOf()
lastIndexOf()
slice()
substr()
substring()
split()
_/

<!------------------------- intermediat javascript------------------------->

<!-- episode 101 : What is the meaning of DOM ? -->

DOM stands of document object model and DOM tree includes all tags and content of them

for select an element with id write this code :

let element = documnet.getElementById('text')

<!-- episode 102 : Methods of selecting elements  -->

# document.getElementById('text')

get one tag what have that id

# document.getElementsByClassName('text')

get all tags what have that class and save in array . this method always return an array that called HTMLCollection

# document.getElementsByTagName('text')

get all tags in our html and return HTMLCollection array

# document.querySelector('select with css')

get the first tag have that condition ( id or class or ...)

# document.querySelectorAll('select with css')

get all tags have that condition ( id or class or ...) and always return an array that called NodeList

<!-- episode 103 : Access to attribute -->

at first select an element and seve in variable then call the element name and write these methods for example :

let element = document.getElementById('titel');
console.log(element.getAttribute('id'))

# getAttribute

access to attribute of tag

console.log(element.getAttribute('class'))

# setAttribute

add new attribute with a value this method get to parameters the first one is name of attribute and second one is value of that

element.setAttribute('class','box')

# removeAttribute

remove a value from attribute of tag

element.removeAttribute('class')

<!-- episode 104 : Access to style of element and change them  -->

to change style of element write this syntax :

# first way

let element = document.getElementById('title')
element.style.color = 'red';
element.style.fontSize = '30px';

or

# second way

element.style = " color : red "

or

# use tilad asign

element.style =
`color : red ;
font-size : 30px;`

<!-- episod 105 : How to access content of html -->

for select content of tag we have 3 property :
for example select this item

assum we have this html :

    <ul class="list">
      <li class="list-item">Home</li>
      <li class="list-item">Contact</li>
      <li class="list-item">About</li>
      <li class="list-item">Servise</li>
    </ul>

and select ul in js :

let listElem = document.querySelector(".list");

# innerHTMl

console.log(listElem.innerHTML);
and show this with spaces:

      <li class="list-item">Home</li>
      <li class="list-item">Contact</li>
      <li class="list-item">About</li>
      <li class="list-item">Servise</li>

# innerText

console.log(listElem.innerText);
just show this without spaces :

Home
Contact
About
Servise

# textContent

console.log(listElem.textContent);
show this with spaces :

      Home
      Contact
      About
      Servise

# we can change the content with these methods for example :

if you want just write text use innerText or textContent and if you want write html code use innerHTML and `` asign instead of "" or '' ( of course you can use tilda asign for innerText or textContent )

for example :

listElem.innerHTML =
`

<li class="list-item">hello</li>
<li class="list-item">world</li>
<li class="list-item">mohammad</li>
<li class="list-item">noohi</li>
`

listElem.innerText = 'this is just some text'

listElem.textContent = 'this is just some text'

<!-- episode 106 : How to build html elements -->

# creatElement method from document object to creat an element

example :

let newHeading = document.createElement("h1");
newHeading.innerHTML = 'This is h1 tag';
console.log(newHeading);

<!-- episod 107 : How to append elements in DOM -->

we have two method for this : append() / appendChild() both of them is same

example :

// creat first element
let listItem_1 = document.createElement("li");
listItem_1.innerHTML = "About";

// creat second element
let listItem_2 = document.createElement("li");
listItem_2.innerHTML = "Servise";

// select parent element
let list = document.querySelector(".list");

// add element to parent
list.append(listItem_1);
list.appendChild(listItem_2);

<!-- episode 108 : Events in js onclick event -->

at first write a function and then set onclick attribute to your tag in html and call your function for example :

function clickFunc(){
alert('click shod');
}

in html :
<button onclick='clickfunc()'></button>

<!-- episod 111 : use keyboar events -->

tree events of keyboard : keydown keyup keypress and use these attribute
onkeydown onkeyup onkeypress

<!-- episod 113 : use focus and bulr events -->

when enter in input occur focus event and when you go out from input occur blur event use onfocus and onblur attribute to use these function
usally use blur event to validation of input value

notice : save document in variable call $ and use this :
let $ = document;

<!-- episode 115 : use dblclick event -->

when user do dobulclick occur dblclick event and use this ondblclick
this event rarly use

<!-- episode 116 : How to setup an event using addEventListener -->

1- select your element
2- call addEventListener method
3- this method get two parameters : the first one is event and second one is function that excute when event occured

element.addEventListener('click',function(){
// code
})

or use callback function

element.addEventListener('click',eventHandler);

function eventHandler(){
//code
}

# یادت باشه موقعی که میخوای نام فانکشن رو توی این متد بنویسی به صورت کال بک فانکشن نباید پرانتز بذاری در اون صورت موقعی که صفحه لود میشه این فانکشن خود به خود اجرا میشه مثل توابعی که خودشون خودشون رو صدا میزدندند

for example :
element.addEventListener('click',clickEvent());

function clickEvent(){
cosnole.log('click shod')
}

<!-- episode 117 : use classList method -->

classList return an array call DOMTokenList and classList have some methods

# search for these method and take a train and write in here

all methods of classList :
1- add
2- contains
3- entries
4- forEach
5- item
6- keys
7- length
8- remove
9- replace
10- supports
11- toString
12- toggle
13- value ( is property )
14- values

usefull methods are :
1- add
2- remove
3- toggle
4- contains

<!-- episod 119 : work with Change event -->

this event use for some elements for example : inputs - select and ...
when the input value change occur Change event

and this method use for select method and don't use for input( for input act same as blur event )

پس این متد بیشتر برای تگ سلکت استفاده میشه و برای اینوت ها بیشتر حکم همون رخداد بلور رو دارد

note : select tag has some option tags and option tag has value attribute so when you select the select tag and write element.value this code show the content of value attribute not content of option tag

<option value='iran'>Iran</option>

show ==> value='iran' not Iran

<!-- episdod 125 : main diffrent between appen & appenChild  -->

let list = document.querySelector('.list');

let listItem1 = document.createElement('li');
listItem1.innerHTML = 'test text';

let listItem2 = document.createElement('li');
listItem2.innerHTML = 'test text 2 ';

# with append we can add text and html but with appendChid just can add html not text

list.append('some text'); // excute normally
list.append(listItem) // excute normally

list.appendChild('some text') // error
list.appendChild(listItem) // excute normally

# with append we can add more than one elements or texts but with appendChild just can add one element

list.append(listItem1 , listItem2) // excute normally
list.appendChild(listItem1 , listItem2) // error

# appendChild return element that appended but append method don't return anything

let appendResult = list.append(listItem); // don't retur anything
let appendResult = list.appendChild(listItem2) // return appended element

<!-- episode 126 : diffrence between keydown keyup keypress -->

for character buttons the order of events is : keyDown - keyPress - keyUp

but for none-character buttons for example : ctrl - shift - backspace - esc ...
for these button don't occur keyPress and first occur keyDown then occur keyUp

and if you hold character button for some seconds occur keyDown and keyPress and don't occur keyPress

# note :

برای تعیین کردن تعداد ارقام بعد از اعشار از متد زیر استفاده میکنیم و البته رند هم میکنه
toFixed( number );
for example :

let num = 7.22222222;
let result = num.toFixed(2) // => 7.22

<!-- episdo 131 : Diffrence between attributes and properties in DOM -->

# note :

method of number
Number()
toString()
toFixed( number ) specify number of digits after point and round the last number
toPrecision
parseInt()
متغیر میتونه شامل فاصله (Space) باشه. و اگر عدد اعشاری باشه، فقط قسمت صحیح عدد را برامون بر میگردونه.
passeFloat()  
 دقیقا مثل متد ()parseInt عمل میکنه؛ با این تفاوت که اگه عدد اعشاری باشه، قسمت اعشاری هم برای ما بر میگردونه.

to access attribute of element we have two ways :

example :
in HTML :

<h1 class="heading" id="title-1" title="bigest heading" noohirole = 'admin'>Learn javaScript</h1>
in JS :

let $ = document;
let h1Elem = $.querySelector('.heading');
console.log(h1Elem.getAttribute('title')) // first way
console.log(h1Elem.title) // second way

we can access to all attributes with getAttribute method but with obj.property just can access to predefined attribute in html for example we don't have noohirole attribute in html and this is arbitrary attribute not predefined so :

console.log(h1Elem.getAttribute('noohirole')) // we can access
console.log(h1Elem.noohirole) // we can't access

and all elements in DOM are objects and we can treat as a object
so we can set arbitrary property to element for example :

h1Elem.noohitest = 'test value';
console.log(h1Elem.getAttribute('noohitest')) // we can't access
console.log(h1Elem.noohitest) // we can access

jus it and done

<!-- episode 132 : How to work with hasAttribute and removeAttribute in DOM -->

hasAttribute method get name of attribute (string) and see in element if elment has that attritbute return true and if dosen't have return false

let heading = document.querySelector(".heading");
let hasTitle = heading.hasAttribute('title');
console.log(hasTitle)

removeAttribute remove an attribute from element

headig.removeAttribute('id')

<!-- episod 133 : The third way to set the event -->

let btn = document.querySelector('button')
btn.onclick = showLog;
function showLog(){
console.log('click shod')
}

or :

let btn = document.querySelector('button')
btn.onclick = function (){
console.log('click shod')
}

<!-- episod 134 : Work with  onSubmit event -->

when user click on input with type of submit all data in form send to server and occur submit event

and this event just for form tag for example:

<form action="" id="login-form">
  <div>
    <input type="text" placeholder="username" name="username"></input>
  </div>
  <div>
    <input type="password" placeholder="password" name="userpass"></input>
  </div>
  <input type="submit" value="login"></input>
</form>

in js :

let form = document.querySelector('#login-form');
form.addEventListener('submit',function(){
console.log('yes')
})

<!-- episod 135 : How to work with event object -->

in function fo addEventListener we have a property that call event or e
and this is an object that save a data about event and element that occur the event on it for see the inforamtion just write this code :
for example :

let $ = document;
const userNameInput = $.querySelector('.username-input');
userNameInput.addEventListener('keypress',function(event){
console.log(event) // => see info of event
})

the event obj have some properties and help us to write some codes

<!-- episod 136 : The concept of preventDefault and use it in diffrent situation -->

with event.preventDefault we can prevent the default of action
the question is : we can use this method for all tags ? for answer to this question
just see console.log(event) and if the cancelable property be true you can use this method

let $ = document;
const submitBtn = $.querySelector('input[type="submit"]');
submitBtn.addEventListener('click',function(event){
console.log(event)
event.preventDefault()
});

<!-- episode 139 : concept of Node and its variant in js -->

we have 12 Node and each node hase number :

element node ==> 1
attribute node ==> 2
text node ==> 3
cdata section node ==> 4
entity refrence node ==> 5
entity node ==> 6
processing instruction node ==> 7
comment node ==> 8
document node ==> 9
document type node ==> 10
document fragment node ==> 11
notation node ==> 12

when select an element you can access to node name and number of node with these property :

element.nodeName;
element.nodeType;

<!-- episode 140 : How to DOM navigation in JS -->

# note : Enter between tags is text node and is \n

parentElement
parentNode

previousElementSibling => just finde element node
nextElementSibling => just finde element node
previousSibling => finde every node
nextSibling => finde every node

firstElementChild
lastElementChild
firstChild
lastChild
childElementCount => count direct child
children => return direct children are elements in array (HTMLCollection)

childNodes ==> return all childs are node
hasChildNodes() ==> we want undrestand a tag has a children or not and return a boolean

<!-- episdod 142: Show password project debugging -->

the first step to debug is see console and try take console.log for each line of code and finde the problem

we have some error that called logical error and we can't see this error in console so just look at your code and finde the bug and this error occur beacuse fo programmer

یه سری ارور هستند که هیچ چیزی ازش نمایش داده نمیشه ولی خب متوجه میشیم که یه جای کار مشکل داره به این ارور ها میگن ارورهای منطقی که به خاطر یه اشتباه توی کدنویسی ایجاد شده و هیچ راهی نداری جز اینکه بشینی و کل کدهات رو بررسی کنی چون
توی کنسول هیچی بهت نمایش داده نمیشه مثلا این خطاها بیشتر به خاطر غلط املایی یا همچین جیزی ایجاد میشه
اما در کل بهترین کار اینه که برای درستی صحت کد هر یک الی دو سه خط کد یه کسنول لاگ بگیری ببینی تا اونجا کد درست کار میکنه یا نه و هرجا ایراد داشت پیداش کنی

<!-- episod 143 : How to remove an element from DOM -->

first select your element and write this code :

element.remove()

<!-- episod 147 : How to work with oncontextmenu event -->

contextmenu event ==> right click event
for disable right click on your site just write this code in html

<body oncontextmenu =' return false '></body>

<!-- episod 148 : How to manage clipboard event -->

copy / cut and paste are clipboard events so we have 3 event :

1- Copy
2- Cut
3- Paste

and we can prevent this event beacause their cancelable property are true so we can use preventDefault to prevent these actions

<!-- episode 149 : concept an application of pageX and pageY -->

event.pageX and event.pageY are for mouse events and get us the specification of cordinate mouse event

مخصتات نقطه که رخداد رخ داده رو میدهد نسبت به کل سند اچ تی ام ال


<!-- episode 152 : concept and application of onlaod event -->

زمانی که بخوایم مثلا موقع لود صفحه یا موقع لود یک عکس یا فیلم و ... یه اتفاقی بیوفته از این رویداد استفاده میکنیم
یا کلا یه المان یا تگ لود شد برای هرچیزی میشه نوشت
اما ۹۹ درصد مواقع این رویداد رو برای بدنه مینویسند تا چیزهای دیگه ای

document.body.addEventListener('load',function(){
  console.log('loaded');
})

البته این کد کار نمیکنه و باید به شکل زیر بنویسم که بعدا راجبش صحبت میکنیم
window.addEventListener('load',function(){
  console.log('loaded');
})

or set onload attribute to body tag and use load event in this way :

<body onload = 'loadHandler()'></body>

and in js :

function loadHandler(){
  console.log('loaded');
}

<!-- episod 153 : Work with DOMContentLoaded event -->

when all content of Dom (html document) be load occur DOMContentLoaded

DOMContentLoaded usaully set for window or document and there is diffrent between load and DOMContentLoaded 

window.addEventListener('DOMContentLoaded',function(){
  console.log('dom content is load');
})

or

document.addEventListener('DOMContentLoaded',function(){
  console.log('dom content is load');
})


<!-- episode 154 : diffrent between load event and DOMContentLoaded -->

Dom Content Loaded : همونطور که از اسمش پیداست زمانی رخ میده که محتوای دام لود شده باشن فقط وفقط محتوای دام.و منتظر لود فایل های سی اس اس و جی اس نمیمونه  به محض اینکه خود دام لود شد دام کانتت لودد رخ میده
حتی منتظر لود تصاویر و ایکن ها و ... هم نمیمونه

loaded : زمانی رخ میده که کل صفحمون لود شده باشه هم دام و هم تمام فایل های سی اس اس و جی اس و تصاویر و ...که به صفحمون لود شده باشند 

we can use these event for preloading and page transition ( when you go to another page from a page )

<!-- episod 158 : work with unload and beforeunload events -->

اینها بسیار بسیار کم کاربرد هستند

unload event occurs when the user navigates away from the page(by clicking on link , submitting a form , closing the browser window , etc )

یعنی این رویداد زمانی رخ میده که صفحه بریم بیرون یه جورایی وقتی که مثلا یه فرم ارسال میشه یا میریم به یه لینک دیگه و ...

<!-- episod 159 : How to use removeEventListener -->

when we want remov some event form element use this method
for example : 

const $ = document;
const box = $.querySelector(".box");
const button = $.querySelector("button");

function mouseMoveHandler(){
  console.log('mouse move')
}

function removeHandlre(){
  box.removeEventListener('mousemove',mouseMoveHandler)
  console.log('event is remove')
}

box.addEventListener('mousemove',mouseMoveHandler);

button.addEventListener("click",removeHandlre);


<!-- episode 160 : Work with select event -->
این رویداد کم کاربرد است
این رویداد زمانی رخ میده که کاربر یه بخشی ازمتن سایت رو انتخاب کنه با موس همین

از این رویداد فقط میشه برای تگ های اینپوت و تکست اریا استفاده کرد

const input = $.querySelector('.username');

input.addEventListener('select',function(event){
  console.log('select event occur',event)
})


<!-- episod 161 : How to work with touch event -->

touch events :

1- touchstart
2- touchmove
3- touchend
4- touchcancel