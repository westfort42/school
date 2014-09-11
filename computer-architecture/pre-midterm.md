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
BDC = **B**inary **C**oded **D**ecimal. This is just the one we're used to, nothing special here.

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

<img src=""/>

