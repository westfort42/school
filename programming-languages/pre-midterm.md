Lecture 1
=========

*Sep 8*

"Languages are machines of thought."

*Sep 9*

####Mozart OZ Kernel Programming Languagee

Go to Niki's old blog for this course: (PL Blog)[http://nikipl.wordpress.com/]. The docs are (here)[http://mozart-oz.org/documentation]. To download for mac, go (here)[http://aquamacs.org/download.shtml]. 

Hello World:
```
{Show "Hello World"}
```

Variables:
```
declare
v = 999 * 9999
{Browse v}
```

Functions:
```
declare
fun {F X} 2 * X + 1 end
{Browse F 2}
{Broswe F 3}
```

Recursion (important for declarative programming, here is a factorial function)
```
declare
fun {Fact N}
	if N==0 then 1 else N*{Fact N-1} end
end
```

`Fact` is declared in the environment -- try a large factorial and see what happens.

Review: Why isn't this an example of tail recursion? -- You have to store the previous result in the stack before passing a parameter. Just remember that tail recursions doesn't use a stack. You'd have to pass parameters directly without using a stack. Tail recursion is very memory efficient, but the other types of recursion aren't so good. Sabbah calls them "memory hungry".

There's also indirect recursion, where, for example, `functionA()` calls `functionB()`, and then B calls A and so forth. Debugging these can be almost as fun as debugging callbacks.

Fibonacci Example
```
declare
fun {Fibo N}
	case N of
	1 then 1
	[] 2 then 1
	[] M then {Fibo (M - 1)} + {Fibo (M - 2)}
	end
end
```

This example is of course very memory hungry, and isn't tail recursive at all. There is a way to make the fibonacci example tail recursive though.

Fun Fact: Sabbah has lived in Thunder Bay for 14 years, and thinks you'll die if you swim in Lake Superior.

Imperative vs Delcarative:

In impertaive languages, you describe the problem, and then you solve it, for example, you do stuff like `if this, then that` where `this` is the problem, and `that` is the solution. What if you only described the problem, and left it to the language to solve it? That's (the general description of) declarative programming.

Can you design a program in such a way that it works 100% of the time? In declarative programming, yup. Technically speaking, it expresses the **logic of a computation** *without* **describing its control flow**. Declarative programming is a style that lacks "side effects" (enforces referential transparency). Side effects are when things like state changes or global variable changes occur. In imperative languages, this is obviously normal, but doesn't happen in declarative. Mozart OZ enforces declarative variables (single assignment storage).

Syntax:

*Declarative variables = immutable variables*. A variable starts with an uppercase letter or a text withiin back quote characters. Comments begin with the character "%".

Example:

```
declare 
X = 21
X = 22 % This will throw an error
```
Once you assign X to 21, it is *bound*. That means that it's value can never be changed.

This concept is known as a "single assignment variable". There are also "logic variables". There are two ways to declare OZ variables, *local* and *scoped*.

Local:
```
local X in
X = 23
local X in 
X = 44
end
{Browse X}
end
```
The output is 6 -- why? Each scope has its one single assignment store.

Declaring Procedures:

Defining procedures is different than defining functions.

OZ Basic Data Types

All the basic stuff is there, and programs can define other types (like abstract data types). There's a big tree in the slides that shows all the data types.
