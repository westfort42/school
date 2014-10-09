Lecture 1
=========

*Sep 9*

Unit conversions -- radix 10 to 2, etc.

*Sep 11*

######Example: Convert 46 radix 10 to radix 4
```
46/4 = 11 + 2
11/4 = 8 + 3
 8/4 = 0 + 2	// Done
```

The result is **232**.

The only bases we really care about in this course are 2 (binary), 8 (octal), 10 (decimal), and 16 (hex). Remeber that hex goes from 1 - F, (1,2,3,4,5,6,7,8,9,A,B,C,D,E,F, in case you forgot).

######Example: Convert octal to binary to hex

Start with 635.177 radix 8, then convert to binary:
```
635.177		// Just start at the left and convert each number ti binary. You need 3 digits in binary to represent one digit in octal, since 2^3 = 8
6       = 110
 3      = 011
  5     = 110
   .1   = 001
     7  = 111
      7 = 111	// The number in binary is...
110011110.001111111
```
Once you've got the number in binary, convert to hex. Remember that `2^4 = 16`, so you need **four** binary digits to represent **one** hexadeciaml digit.
```
// Start from the decimal, and go left
1110 = D
1001 = 9
0001 = 1	// You can add zeros on the left (and right) of the number as much as you want, since it doesn't change the value of the number)
// Now go from the right of the decimal
0011 = 3
1111 = F
1000 = 8
```
The result is `D91.3F8`.

####Binary Codes for Decimal Digits
There are a bunch of ways to show 1 - 10 in binary (over 8000 or something... but never *over 9000*). The normal one goes 0, 1, 10, 11, 100, etc. BUt there are also a few other popular ones.

######Excess-3
Start at 0011, go up from there.

######8,4,-2,-1
0000, 0111, 0110, 0101, 0100, 1011, etc. This one isn't so popular. You just Start at 0000, go to 0111, and basically count backwards from there.

######BCD
BDC = Binary Coded Decimal. This is just the one we're used to, nothing special here.

######Gray Code
This one is weird, but the point of it was to only change one bit at a time when incrementing. It's kind of genius, but we'll look at it later.

The guy at the front of the room is yelling about how we need to be careful not to mix up *conversion* and *coding*. *Conversion* is when you take a number in, say, decimal, and then convert it to binary, ie `15 = 1111`. *Coding* is taking each digit and putting that digit in binary, ie `15 = 001|100`. Don't mess up.

####Arithmetic
How do you add, subtract, and multiply (we're too dumb for division I guess)? You just do it like a normal human would:

What's 1 + 0 (we're talking addition of two binary numbers)?
```
	1
+	0
=	1
```

That's pretty basic, here's a better one:
```
	01100
+	10001
=	11101
```
That was also easy, since we didn't have a carry. Here's a simple one with a carry:
```
	011
+	101
=      1000
```

######Subtraction
Subtraction is also easy, instead of adding the carry, you just borrow it. It's just like the way you learned in elementary school doing decimal subtraction.
```
	10110
-	10011
=	00011
```

A good thing you can do if you want is to convert the number to decimals and do the calculation that way to check your answer.

######Multiplication

This is the binary multiplication table:

`0 * 0 = 0`, `1 * 0 = 0`, `0 * 1 = 0`, `1 * 1 = 0`.

Binary multiplication is incredibly easy once you know the table. To mutiply two binary numbers, follow my stupid picture:

Lecture 3
=========

*Sep 16*

Binary division:
```
101 / 1101101.101
      101
      00111
        101
         1001
          101
          100.1
           10.1
           10.00
            1.01
            1.000
              101
              111
```
This doesn't seem like it's going to be to important, since it wasn't covered last year or covered in any detail here. **Next Lecture, an assignment will be handed out and a quiz happen** (covering this chapter). So just review conversion and simple arithmetic.

####Chapter 2

#######Part 1: Gate Circuits and Boolean Equations

The basic logic operators are `AND`, `OR`, and `NOT`.

######Basic Truth Tables

| AND (・) |  |     |
| ---- | ---- | --- |
| 0    | 0    | 0   |
| 0    | 1    | 0   |
| 1    | 0    | 0   |
| 1    | 1    | 1   |

| OR (+) |    |     |
| ---- | ---- | --- |
| 0    | 0    | 0   |
| 0    | 1    | 1   |
| 1    | 0    | 1   |
| 1    | 1    | 1   |

*Our goal* is to design hardware that can perform any logical or mathematical operation, while trying to make the simplest possible equation (in the real world, smaller = cheaper and more environmentally friendly).

######Logic Diagrams
Here's `F = X + ¬YZ`

<img src="img/ld.png" />

######Boolean Algebra
There are *17* commonly used boolean formulas. Just add that image into this document.

Lecture 5
=========

Example:
```
ACD' + C'D' + (A'C')'
= D'(AC + C') + A + C
= D'((A + C')(C + C')) + A + C
= AD' + C'D' + A + C
= A(1 + D') + (C + C')(C + D')
= A + C + D'
```

This was a question on a quiz. These questions are pretty easy *if* you know all the laws that make simplification easier (like DeMorgan's Law, etc).

####Canonical Forms
This is the part of the unit where we learn about minterms and maxterms, sum-of-minterms representations, product-of-maxterm representations, representation of complements of functions, and conversions between representations.

######Maxterms/Minterms
I don't know how to explain this without just showing an example:

| A    | B    | C   | Minterms     | Maxterms   |
| ---- | ---- | --- | ------------ | ---------- |
| 0    | 0    | 0   | (A')(B')(C') | A + B + C  |
| 0    | 0    | 1   | (A')(B')(C)  | A + B + C' |
| 0    | 1    | 0   | (A')(B)(C)'  | A + B' + C |

Maxterms are **OR** terms with every variable in **true** or complemented form.
Minterms are **AND** terms with every variable in **false** or complemented form.

How would you represent minterms number 4?

Well, the sixth row of the truth table for XYZ would be,

| X    | Y    | Z   |
| ---- | ---- | --- |
| 0    | 0    | 0   |
| 0    | 0    | 1   |
| 0    | 1    | 0   |
| 0    | 1    | 1   |
(etc)

It would be equal to (A')(B)(C) *(minterm)* or A + B' + C' *(maxterm)*. As you might've just realized. The relationship between minterms and maxterms is just DeMorgan's Law.

At this point, there are a ton of tables in the slides, so you'd be better off referring to those.

######Minterm Function Example
Find `F1 = m1 + m4 + m7`:

`F = X'Y'Z + XY'Z' + XYZ`

If you wanted the **Product of Maxterms** (which would've been denoted `F1 = (M2)(M3)(M5)(M6)`), it would just be:
`F = (X + Y' + Z)(X' + Y + Z)(X' + Y' + Z)(X' + Y + Z')(X' + Y' + Z )`

Finding the SOM and POM is basically the opposite of what we learned last week. This is expansion, instead of simplification.

Why would anyone even want to find the SOM or POM? This is the *short form* of a function (since it's expressed easily). This encourgaes modularity and reusability in logic design. It's kind of like how a function works in programming.

Lecture 6
=========

*Sep 25*

Any Boolean function can be expressed as a Sum of Minterms. Example: Implement `f(x, y) = x + xy` as a Sum of Minterms:
```
  x + xy
= x(y + y')
= xy + xy' + x'y
= m1 + m2  + m3
```

Remember that any function can be represented both ways: as a Sum of Minterms *or* a Product of Maxterms. Here's another example of a Sum of Minterms function(just remember that `(x + x') = 1` so you can pretty much throw that where you need it:
```
f = a + b'c
  = a(b + b')(c + c') + (a+a')b'c
  = abc + abc' + ab'c + ab'c' + ab'c + ab'c
// If you have redundant terms, you can just remove the duplicates, and it will not affect the value
  = m1 + m4 + m5 + m6 + m7
```

Let's try to express something as a Product of Maxterms. Instead of re-doing the previous example, let's do a different example. For this example, we will be obtaining the **complement of the function**. How do you this? You just apply *DeMorgan's Theorem* (remember?)
```
F = (1,3,4,7)
// The complement would be:
F = (0,2,5,6)
```

What is `F = (1,3,4,7)` as a product of maxterms?: It's just `(x + y + z')(x + y' + z')(x' + y + z)(x' + y' + z')`. This good because if you know the product of maxterms or the sum of minterms for some function, it's easy to get the other one by finding the complement.

The formal notation for the SOM is `∑m`, and the formal notation for the POM is `∏M` (that was supposed to be the Pi symbol).

Last Example: Represent `f = (a + b'c)(ab' + c)` as SOM and POM:

**Do POM first since it can be done in fewer steps**
```
f = (a + b'c)(ab' + c') // Factor out the term (a + c)
  = (a + b)(a + c)(a + c)(a' + c)
  = (a + b' + c)(a + b' + c')(a + b' + c)(a + b + c')(a + b' + c)(a' + b' + c)
  = (0   1    0)(0   1    1 )(0   1    0)(0   0   0 )(0   1    0)(1    1    0)
  = M(0, 2, 3, 6)
```
Now the SOM is just `m(1, 4, 5, 7)`.

######Standard Form
The standard form when a function is either expressed as a *sum of products* or a *product of sums*. For example,
```
SOP: abc + a'b'c + b
POS: (a+b)(a+b'+c')(c)
```
How is this different that the canonical form? Well, in the standard form you don't need to have all the terms in each group of terms.

Example: Simplify this canonical form into the standard form:
```
F = a'b'c + ab'c' + ab'c + abc' + abc
// Do some factoring of common terms
  = a'b'c + a(b'c' + b'c + bc' + bc)
  = a'b'c + a(b' + b)
  = a'b'c + a
  = a + b'c
```
Now we have the SOP. What if we want the POS?
```
// Start witht the complement:
F = a'b'c' + a'bc' + a'bc
  = a'b'c' + a'b
  = a'(b'c' + b')
  = a'b + a'c'
// Then complement again using DeMorgan's Theorem
  = ea + b')(a + c)
```
Dr El-Ocla says: **these are very important**. The difficulty of the examples here are the same as they will be on an exam.

####Chapter 2 Part 2: Circuit Optimization
Our goal now is to  obtain the simplest implementation for a given function. With the method we've been using until now, it's very hard to know if we've found the optimal method.

######Literal & Gate Inuput Cost
The **literal cost** is the *total number of variables* in a function. For example,
```
F = bd + ab'c + acd'  // L = 8
```
The **gate input cost** is the *total number of `AND`s or `OR`s in the function. We also sometimes count the `NOT` gates as well:
```
F = bd + ab'c + acd'
```

Lecture 7
=========

*Sep 30*

Recall: Gate Input Cost = # of literals + # of gates (gates are ANDs or ORs and sometimes NOTs).

Today was just drawing gates. A better way to do learn this is to use some free web based software, punch in some expressions, and see what comes out.

SOM and POM: Full DeMorgan's Law
SOP and POS: **Do not complement operators**, only terms!!

When you're converting a POS and SOP, you complement the terms, and then use the Boolean identities to obtain the expression you're solving for.

######DR. EL-OCLA MADE A BIG DEAL ABOUT THIS SO OBVIOUSLY ITS GOING TO BE ON THE MIDTERM.

Converting:

`SOP -> SOM -> complement terms -> POS`.

Here's another questiont that will be on the midterm: What has a lower gate-input cost: SOP or POS?

####Karnaugh Maps (The hardest thing ever)

A k-map is a collection of square. It's a graphical method to represent a truth table.

######Two Variable Karnaugh Map

They're organized like this:

| K - Map | y = 0 | y = 1 |
| ---- | ---- | --- |
| x = 0 | m0  | m1 |
| x = 1 | m3  | m2 |


Lecture 8
=========

*Oct 2*

Three variable K-Map

| K-Map | yz = 00 | yz = 01 | yz = 11 | yz = 10 |
| ----- | ------- | ------- | ------- | ------- |
| x = 0 | m0      | m1      | m3      | m2      |
| x = 1 | m4      | m5      | m7      | m6      |

**K - Maps are only applicable with sum of minterms or product or maxterms (not SOP or POS)!!**

| Truth table | x  | y  | z  |
| -- | -- | -- | -- |
| m0 | 0  | 0  | 0  |
| m1 | 0  | 0  | 1  |
| m2 | 0  | 1  | 0  |
| m3 | 0  | 1  | 1  |
| m4 | 1  | 0  | 0  |
| m5 | 1  | 0  | 1  |
| m6 | 1  | 1  | 0  |
| m7 | 1  | 1  | 1  |

Reduction in truth tables: you group together numbers that only have *one* bit change between them, ie m3 and m2 have *one* bit change between them (010) and (011), m3 and m5 have *two* bit changes between them (011) and (101).

######In an exam, you may be asked to use Boolean algabra to reduce, or you may be asked to use K - Maps. If it is not specified, you may use whatever method you prefer. Only examples from class, examples from assignments, and questions from quizzes will appear on the midterm and final.

If you're using maxterms instead of minterms, write `0`'s in the K - Map instead of `1`'s.

Example: F(a,b,c) = m3, m4, m6, m7

| K-Map | yz = 00 | yz = 01 | yz = 11 | yz = 10 |
| ----- | ------- | ------- | ------- | ------- |
| x = 0 | 0       | 0       | 1       | 0       |
| x = 1 | 1       | 0       | 1       | 1       |

So the result is, `F = xy' + x'y` (for the SOP) and `F = (y + z')(x + z)` (for the POS).

**Combining Squares**

By doing this in K - Maps, we reduce the number of literals.

Example: m0, m1, m2, m4, m6, m7:
```
     1 1 0 1
     1 0 1 1
SOP = xy + x'y + z'
POS = no possible simplification in this case
```
 For the example above, the POS can just be determined manually using the SOP:

 ```
 SOP = xy + x'y + z'
 POS = (x + y' z') + (x' + y + z')
 ```
 What is the gate input cost for each?

 SOP: 10 (for GN)

 POS: 11 (for GN)

 **Four Variable Maps**

 It's the same concept as before, however, you need to make sure you know where the terms go in the map:

 ```
             y   y
    m0  m1  m3  m2
    m4  m5  m7  m6   x
w   m12 m13 m16 m15  x
w   m8  m9  m11 m10
         z   z
 ```

 Quiz next **Thursday**, assignment due next **Tuesday**..

Lecture 9
=========

*Oct 7*

**Quiz on Thursday**

Example: Put this in standard form, find lowest cost:

```
F(A, B, C) = AB    + AB'    + ABC'
           = 11(0) + 10 (0) + 110
```

Use a K - Map:

| K-Map | bc = 00 | bc = 01 | bc = 11 | bc = 10 |
| ----- | ------- | ------- | ------- | ------- |
| a = 0 | 0       | 0       | 0       | 0       |
| a = 1 | 1       | 1       | 1       | 1       |

So this can be simplified to just 'a'. That is both the SOP and the POS.

######Four Variables Maps (Continued)

*Example:* Simplify: 0,2,4,5,6,7,8,10,13,15

```
         y  y
   1  0  0  1
   1  1  1  0   x
w  0  1  1  0   x
w  1  0  0  1
      z  z
```

The SOP solution is: `xz + x'z' + w'x` **or** `xz + x'z' + w'z'` (both are valid solutions).

The POS solution is: `(x + z')(w' + x' + z)`

*Example 2*: Simplify: 3,4,5,7,9,13,14,15

| K-Map |         |         | y       | y       |       |
| ----- | ------- | ------- | ------- | ------- | ----- |
|       | 0       | 0       | 1       | 0       |       |
|       | 1       | 1       | 1       | 0       | **x** |
| **w** | 0       | 1       | 1       | 1       | **x** |
| **w** | 0       | 1       | 0       | 0       |       |
|       |         | **z**   | **z**   |         |     | |

The SOP solution is: `(xz + wy'z + wxy + w'yz + w'xy')`.

**New Definitions**:

Any simplified term is called an *implicant*. A *prime implicant* is a product term obtained by combining the maximum possible of terms in the K - Map (ie, prime implicant would be something with 3 terms in the 3 variable K - Map). An *Essential prime implicant* is a prime implicant that couldn't be obtained any other way.

Example: Find all essential prime implicants in 0,2,3,8,9,10,11,12,13,14,15:

| K-Map |         |         | y       | y       |       |
| ----- | ------- | ------- | ------- | ------- | ----- |
|       | 1       | 0       | 1       | 1       |       |
|       | 0       | 0       | 0       | 0       | **x** |
| **w** | 1       | 1       | 1       | 1       | **x** |
| **w** | 1       | 1       | 1       | 1       |       |
|       |         | **z**   | **z**   |         |     | |

The *prime implicants* are `w + x'y + x'z'`. All are essential prime implicants as well.

**Five (or more) Variable Maps**

You do the same thing, but with two adjacent four variable maps. If you wanted a six variabke maps, you'd use four adjacent four variable maps. If you have seven... use a computer.

Lecture 10
==========

*Oct 9*

Today we covered **don't cares** in K - Maps.

Example: Find the optimum POS solution: (3,9,11,12,13,14,15) with don't care being (1,4,6).

| K-Map |         |         | y       | y       |       |
| ----- | ------- | ------- | ------- | ------- | ----- |
|       | 0       | x       | 1       | 0       |       |
|       | x       | 0       | 0       | x       | **x** |
| **w** | 1       | 1       | 1       | 1       | **x** |
| **w** | 0       | 1       | 1       | 0       |       |
|       |         | **z**   | **z**   |         |     | |

=  `BD' + AD + B'D` (you can actually find a more optimized solution).
