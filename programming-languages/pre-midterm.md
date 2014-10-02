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

Lecture 3
=========

*Sep 15*

Mozart OZ defines declarative computations among other styles:
- Independent: it computes irrespective of other computations (no coupling)
- Stateless: each action is unrelated to the previous action (in Sabbah's words, "no side effects")
- Deterministic: the same input will produce the same output

*Recursion enforces independence* - will talk about this more later.

Most modern languages implement arrays as lists -- this is because crappy arrays can only store data of the same type, and are of predefined size. Lists are dynamic -- put whatever data type you want in there, and don't even worry about what size it is.

Just to make this part of the course even crazier, Mozart is *dynamically typed*. 

######Records
Like a hash table without the damn commas:
```
R = suit( shirt:beige pants:ochre socks:coral )
```
The order of the data in **records** doesn't matter. You can do stuff like this:
```
{Browse R.shirt		%use dot operator to access data}
```

######Tuples
Tuples differ by records in that tuples are in a certain order:
```
T = state(1 a 2)
```
I *think* it's like an array where you don't have to allocate memory, and it can contain different data types. Accessing data in tuples with the dot operator is done like this: `T.1` returns 1, `T.2` returns a. <span style="color:red; !important">WARNING</span>: You start counting from *1* when dealing with tuples (not zero!!!).

There's a really good example of a binary tree implementation in the lecture notes, go check that out.

######Lists
These are so common they get their own special syntax:
```
L = john|paul|george|ringo|nil
% or you can do
L = [john paul george ringo nil]
% or even do thisL]
L = john|(paul|(george|(ringo|nil))) % this is more like a tree than a linked list
```

The first element is accessed by doing `L.1`, the rest is `L.2`. The `|` operator is used to *partition* lists (seperate list into two lists).

######Matrices
Like any other language, make a list of lists:
```
M = [ [1 2] [3 4] [5 6] ]
```

######Pattern Matching
Pattern matching takes apart a data structure by matching it against a corresponding shape. Here's an example of a function:
```
fun {SumList L}
	case L
	of nil then 0
	[] H|T then H + {SumList T} %call recursively, since you can only differentiate between H and T
	end
end
```
Basically, you go through the list, partition the list, then add the head to the "tail" (which is always the second element in the list). Sabbah is saying this is *so cohesive* (I dunno if I agree).

The true magic of recursion, is apparently, **transparency**. I think Sabbah's trying to highlight the fact that recursion forces your functions to be deterministic, and forces you write significantly smaller functions (since you just have a base case and then some logic in most cases). "If someone comes to me and says 'I hate recursion', I will take that guy and throw him outside immediately". - Sabbah Mohammed.

Don't forget that your functions should be tail recursive so you don't absolutely annihilate your system's memory, since non tail recursion is inherently memory hungry. This sparked a lot of debate among the masters students.

####Tail Recursion
Are you doing operations *after* you call your recursive function? Then that isn't tail recursion buddy!

Check this out:
```
declare 
fun {Fact N A}
	if N==0 then A
	else {Fact N-1 N*A}
	end
end
``` 
There's no operations happening after your function calls! You can literally never overflow the stack, since there *isn't a motherfucking stack*. Oh hell yeah baby. For practice, try making other common recursive functions tail recursive, like Fibonacci or Pascal's Triangle.

####Lecture 5

*Sep 22* (I wasn't there for Lecture 4).

Apparently last time we covered some basic data sturctures. It should be available in the course notes.

######Declarative Concurrency

Concurrent Programs: several activities happen at the same time. There are two main concurrency models:
- Multithreaded Model (think Erlang)
- Event-Driven Model (think Node.js)

In multithreading, each process executes in a diffrent thread of control. Multithreaded programs are usually synchronous. In event-driven models, processes execute in an event loop. It's usually async.

**In OZ**, we use multithreading! There is declarative concurrency (deterministic & stateless), and advanced concurrency via streams and cell variables (this is stateful). The best thing in OZ is called "laziness". More on this soon.

######Laziness

A type of evaluation that enables dealing with infinite data structures. Defines control flow as abstraction instead of primitives.

Example:

```
B = {F1 Y}
C = {F2 Y}
A = B + C
```

B and C *are only* evaluated if needed by A.

Basically, all operations are suspended until its results are needed. This differs from data-driven execution, where the results will be computed before they're needed by the operation. This is sometimes called "evaluation by demand".

You can define something as being lazy by using the `lazy` keyword that OZ provides. You can also run different threads by prefixing a function call with `thread`, for example:
```
thread Xs = {Ints 1 10} end
```

Sabbah keeps mentioning "infinite data structures". This is exactly what it sounds like: your data structure can go on forever (or until all your RAM holes are all filled up).

There are a bunch of good examples that show there differences between regular execution, multithreading, laziness, and stuff like that in the lecture notes.

######Conditions for Declarative Concurrency
**No race conditions**! That means no observable non-determinism among threads. The result of a program *must* be the same whether it is concurrent or not.

Fun fact: with OZ you can have up to 100 000 active threads on a standard PC.

######Synchronizing Multiple Threads

You can do this with **data flow variables**. Data flow variables are *blocking* (they stop the execution for a certain amount of time). This allows top-level stuff to continue, while the thread is basically waiting. We'll talk more about this stuff next lecture since it's relatively dense.

Like any programming centered course, all this becomes way more apparent when you write and run some code. Just mess around with the examples, and you'll be on your way.

Lecture 6
=========

*Sep 24*

There is no *thread overlapping* in OZ. To control interleaving, is OZ we use streams. A **stream** is a list which has its tail unbound. It can be a list of anything, and it grows dynamically. We will have a lecture on stream programming coming up soon, so don't worry about it too much now.

This is an example that used streams, but the Browse statement is still needed.
```
declare
fun {Count N}
	fun {Help I}
	if I==N
		then N|nil
	else I|Help{I + 1}
	end
end
in 
	{Help 1}
end
```

######Cell Variables
A *cell* is a basic unit of encapsulated state.

#Functional Proggramming
######(In Racket)

At this point, we'll begin studying **functional** programming. For this, we're going to use Racket, which is a purely functional language. Right now, Sabbah is talking about a school called Imperial College, where the chair only mandated that the only type of programming language used throughout the entire degree program was functional (and it was apparently O'Caml). I guess this is the good shit.

Functional languages are called "reduction machines". It's also time now for... 

######Lambda Calculus
Functional thinking and programming is on the rise (see: Scala, Clojure, Erlang, Scheme, Haskell (lol)). If you only know how to use Java at this point, fuck you.

Functional programming is also declarative, however, declarative programming encapsulates a bunch of different types of programming. HTML is declarative, but it is definitely not functional. 

In functional programming, **all functions are anonymous**. Next lecture we'll talk about lambda expressions in more detail.

Lecture 7
=========

*Sep 29*

####Functional Programming with OZ

Alright whatever let's get right into Lambda calculus. We're going to compose problems as functions. We don't care about control flow or anything like that anymore.

Lamba Calculus is about *lambda functions*. **Every function we're going to write will be anonymous**. In lambda calculs, all functions must take a single paramter. If you have two parameters, you're gonna need two functions. What does that mean for a basic function, like `f(x) = 2*X`?

```

```

The basic logic for lambda calculus is *reductionism*. You keep reducing until you get a *normal* value. In math, everything is infixed. Here, everything is prefixed. 

######Single Argument Representation
The function `x - y` is represented as `lambda(x).lambda(y).(x - y)`. That means that each function takes one argument.

######Rules of Reduction
**Recursion is not allowed**. This limits the expressiveness of the language. However, we can define a function inside lambda calculus called the Y-Combinator that basically allows recursion.

Alpha reduction: changing the name of a bound variable
Substitution: If a variable appears free in the expression, we can perform a substitution.
Beta reduction: Function application
Eta-reduction: Reduces 'redundant' functions.

######Some real examples in OZ

Example: function that finds the square of a number.
```
declare Square = fun{$ X} X * X
end

{Browse {Square 6}}
```

Incrementing using eta-reduction
```
declare Increment = fun{$ X} X + 1 end
{Browse {Increment 5}}

declare Inc = fun{$ X} {Increment X} end
{Browse {Inc 6}}
```

Lecture 8
=========

*Oct 1*

####Racket

Functional programming with (Racket)[http://racket-lang.org]

Racket is basically another language purely for academics. It is loosely based off of Lisp and Scheme. It's a lot more like Scheme than it is like Lips.

There was a free book written on Racket, available (here)[http://htdp.org].

*Good Words From Sabbah*: this course is designed to make you a Samurai programmer. It's designed to make you tough, and make you able to do "magic". The more programming paradigms you're able to use, then better you'll be at programming.

For some reason Sabbah is playing a song about Lisp now...

######Racket (for real this time)
- Uses prefix notation for evaluating expressions
- Comes with a REPL for trying stuff out
- Example: square
```scheme
(define (sq x) (* x x))
(sq 3)
```
- You can save files as .scm or .rkt

Another boring example:
```scheme
(define (fahrenheit->celsius t)
	(* 5/9(- t 32)))
```
The other direction
```scheme
(define (celsius->fahrenheit)
	(+ (* 9/5 t) 32))
```
Testing:
```scheme
(define (I F)
	(celsius->fahrenheit (fahrenheit->celsius) f))
(I 32) ;; should be 32
```


