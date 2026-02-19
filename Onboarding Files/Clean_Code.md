# Writing Unit Tests for Clean Code

Unit Test helps keep the code clean because it finds early bugs and it test small units to detect errors before the overall system is built. Another is that it makes the code safer to modify; once you can change code, tests are ensured not to break. I also improve code quality and save time in the long run.

Issues I have while testing are that the function logic doesn't match the expected behavior, and the input values in my test are incorrect. This causes the jest to show an error such as **"ReferenceError: calculatedDiscount is not defined"**. A simple fix which is to change the code manually.

# Handling Errors & Edge Cases

The issue with the original code is that it does not have the ability to check if the inputs are numbers, and also it doesn't prevent negative prices or invalid discounts. Those were the issues, and it was fixed once the introduction to error handling was made.

Error handling improves the reliability of your code because it handles the possibility of error coming out in your development. Implementing error handling is useful because it shows you what the possible errors in your code and you can adjust to that error where the program doesn't undergo that error.

# Refactoring Code for Simplicity


The original code is complex due to having too many nested conditionals, loop & conditionals are mixed, and lastly, console logs inside logics. This was the original code's problem and its complexity, and I will try to refactor it to make it simpler and more efficient.

Refactoring improves the number of functions; some were omitted, and another is adding guard clauses to reduce nested conditionals. Lastly, it is to have readable logic, refactoring the code not only for the programs efficiency but also the ability for other developers to easily understand your logic in coding.

# Commenting & Documentation

You add comments when you're explaining your code, describing complex algorithms, documenting function inputs or outputs, and edge cases or assumptions. The following are the reasons when you should add comments: this is in order for your fellow developer to understand your code. 

Avoid comments when you repeat what the code already says. You can also code in a way where it can be self-explanatory in terms of people understanding your code. If the code is easy to understand, I don't think you need to put comments in it. 
