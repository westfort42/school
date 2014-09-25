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
   fun {StartAt M}
      if M==N
         then N|nil
      else
	 M|{StartAt M+1}
      end
end
in 
   {StartAt 1}
end

% Test
{Browse {Count 10}}

% Question 2a: Write the following OZ Recursive functions over lists: ListLength (e.g. {ListLength a|b|c|nil} '==' 3)

% Solution

declare
fun {LengthFromTo L Count} 
    if L==nil then Count
    else
		{LengthFromTo L.2 Count+1}
    end 
end
fun {ListLength Xs} {LengthFromTo Xs 0} end

% Test
{Browse {ListLength 1|2|3|nil}}

% Question 2a: Write the following OZ Recursive functions over lists: Return the product of the numbers in the argument list (e.g. P [4 1 2 3]} '=='  24).
% Solution

declare
fun {P N}
   case N of nil then 1
   [] H|T then H*{P T}
   end
end

% Test
{Browse {P[4 1 2 3]}}

% Question 3: Write an OZ function that will flatten a given list.
% Solution

declare
fun {FlattenOne H T}
   if H == nil then T
   else H.1 | {FlattenOne H.2 T}
   end
end
fun {Flat N}
   case N of nil then nil
   [] H|T then {FlattenOne {Flat H} {Flat T}}
   else [N]
   end
end

% Test
{Browse {Flat[1[2[3 4 5 ] 6] 7]}}

% Question 4 and 5: Did not complete in time