Assignment 2
============

######Ben Tranter | Oct 7, 2014 | 0489368

**2-6**: Simplify the following Boolean expressions to a minimum number of literals:

1.
```
  ABC + ABC' + A'B
= BC + BC' + B
= B + B + B
= B
```

2.
```
  (A + B)'(A' + B')
= (A'B')(A' + B')
= A'A'B' + B'A'B'
= 1B' + 1A'
= B' + A'
= A' + B'
```

3.
```
  A'BC + AC
= BC + AC
```

4.
```
  BC + B(AD + AD')
= BC + B(A)
= BC + BA
```

5.
```
  (A + B' + AB')(AB + A'C + BC)
= (A + (B'A)(B'B'))(B + BC)
= (A + (AB')(B'))(B + C)
= (A + B')(B + C)
= AB + AC + B'B + BC
= AB + AC + BC
= A + B + C
```
---

**2-12**: Convert the following expressions into sum-of-products and product-of-sums forms:

1.
```
  (AB + C)(B + C'D) = Product of sums
= (A'B' + C')(B' + CD')
= (B'+ C')(A)(D')
= AB'D + AC'D = Sum of products
```

2.
```
  X' + X(X + Y')(Y + Z')
= (X + XY')(XY + XZ') = Product of sums
= X + (X' + X'Y)(Y' + Z')
= X + XY' + XZ' + X' + XY'Z'
= XY' + XZ' + XY'Z' = Sum of products
```

3.
```
  (A + BC' + CD)(B' + EF) = Product of sums
= (A' + B'C' + C'D')(B' + E'F')
= A'B' + A'E'F' + B'C' + B'C' E'F' + B'C'D' + C'D'E'F' = Sum of products
```
