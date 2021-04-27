#Part1a
1)num1 +num2 is printed because that is what happens in the if block containing add
2)num1+num2 because result has funciton scope it doesn't return an error even though it is techincally in the add block
3) Would compile but because of line 13 the code doesn't run.
4) Doesn't compile because it is out of scope of the if block where the variable is declared. 
5) Doesn't compile because of the fac that it is a const and that const stops result from being reassigned which casues and error.
6) same resason 
#Part1b
1) 3 will be printed because that is the last value that i holds.
2) 150.0 is printed because that is the last value of discountedPrice in the loop and because it is a var scope doesn't matter.
3) 150 it jist drops the decimal from discountedPrice
4) [50,100,150] because it stores all the values of the discounted prices based of of the prices list.
5) This causes an error because let variables can't be refereced outside the scopp it was declared in which is the loop.
6) Another error because let was in the scope of the for loop because it is being used outside the for loop.
7) This will work and have the same result of 150 because it is used in the same scope is declared.
8) [50,100,150] because it stores all the values of the discounted prices based of of the prices list and there are no scope issues
9) It will be an error because of the scope of i being in the for loop.
10) It prints out 3 because that is the length of prices and there are no scope or declearation issues.
11) Apparently push doesn't mess with const so it returns the same value of [50,100,150].
12) 
    1)  a) student.a 
    2)  b) student['Grad Year'] 
    3)  c) student.greeting() 
    4)  d) student['Favorite Teacher'].name 
    5)  e) student.courseLoad[0]
13) 1)  a)32 converts the 2 to a string then adds the string
    2)  b)1 converts the 3 to an int then subtracts
    3)  c) 3 null is 0
    4)  d) 3null treats null as a string like '3'
    5)  e) 4 true is converted to 1
    6)  f) 0 because false and null are 0 
    7)  g) 3undefined because it combines the strings
    8)  h) NaN because 3 - undefined is not a number
14) 1)  a) true because 2 is greater than 1
    1)  b) false because alphabetically 2 comes after 12
    2)  c) True because it autoconverts
    3)  d) False because it doens't
    4)  e) false because wrong types
    5)  f) true because boolean(2) is true of the same type
15) == checks equailty but === checks for stricter equailoty if they are objects they must be the same object, if they are primitive they must be the direct same value.
16) sep file
17) It doubles all the values of the array. It does this by loioping through the array and then calling callback which is a function that returns the inputed number by 2.
18) sep file
19) 1 then 4 then 3 then 2 This is because 1 is before them all. 4 has no delay. Then 2 has the most delay.


   

