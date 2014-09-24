% Ben Tranter (0489368)
% Exercise 1
% Sep 24, 2014

% Question 1a: Return the product of the integers from I to J inclusive (e.g. {ProdFromTo 3 10} '==' 1814400)

% Solution

declare
fun {ProdFromTo N M}
   if N==M then N else M*{ProdFromTo N M-1} end
end

% Test
{Browse {ProdFromTo 3 10}}

% Question 1b: Return the sum of the numbers from I to J, inclusive. (e.g. {SumFromTo 1 10} '==' 55)

% Solution

declare
fun {SumFromTo N M}
   if N==M then N else M+{SumFromTo N M-1} end
end

% Test
{Browse {SumFromTo 1 10}}

% Question 1c: Return the list [1 2 3 ... N](e.g. {Count 10} '==' [1 2 3 4 5 6 7 8 9 10])

% Solution

declare
fun {Count N}
   fun {Help I}
      if I==N
         then N|nil
      else
	     I|{Help I+1}
   end
end
in 
   {Help 1}
end

% Test
{Browse {Count 25}}