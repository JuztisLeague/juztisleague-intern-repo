# Writing Unit Tests for Clean Code

Unit Test helps keep the code clean because it finds early bugs and it test small units to detect errors before the overall system is built. Another is that it makes the code safer to modify; once you can change code, tests are ensured not to break. I also improve code quality and save time in the long run.

Issues I have while testing are that the function logic doesn't match the expected behavior, and the input values in my test are incorrect. This causes the jest to show an error such as **"ReferenceError: calculatedDiscount is not defined"**. A simple fix which is to change the code manually.

# Handling Errors & Edge Cases

The issue with the original code is that it does not have the ability to check if the inputs are numbers, and also it doesn't prevent negative prices or invalid discounts. Those were the issues, and it was fixed once the introduction to error handling was made.

Error handling improves the reliability of your code because it handles the possibility of error coming out in your development. Implementing error handling is useful because it shows you what the possible errors in your code and you can adjust to that error where the program doesn't undergo that error.

# Writing Small, Focused Functions

Why is breaking down functions beneficial?
Breaking down the function is beneficial because it avoids multiple responsibilities and makes the function easy to test. If bad functions are implemented, they usually have multiple responsibilities, are hard to test, hard to reuse, and are too long. Fixing this is through breaking down its function for it efficient and simpler for other developers to understand.

Refactoring improves the structure of the code by making it more efficient and easier to understand. The functions are shortened, and it is now easier to test. Also, functions are becoming much easier to reuse.

# Refactoring Code for Simplicity

The original code is complex due to having too many nested conditionals, loop & conditionals are mixed, and lastly, console logs inside logics. This was the original code's problem and its complexity, and I will try to refactor it to make it simpler and more efficient.

Refactoring improves the number of functions; some were omitted, and another is adding guard clauses to reduce nested conditionals. Lastly, it is to have readable logic, refactoring the code not only for the programs efficiency but also the ability for other developers to easily understand your logic in coding.

# Code Formatting & Style Guides

Code formatting is really important to improve the consistency and readability of the code for other developers. This follows the consistent format where developers can easily understand its structure without confusing the code logic.

Linter detects missing semicolons, line exceeding the maximum length, and missing blank lines around headings and lists. This is really useful because it detects your mistakes before committing your code to the branch.

Yes, using a code format makes it easier to understand and read the code because it is now properly structured and organized. It also makes the code look cleaner and looks more professional. This is also making it easier to maintain and modify in the future.

# Naming Variables & Functions

A good variable should describe the intent clearly, must use complete words, must be easier to understand, and use nouns for variables & verbs for functions. This is so that other developers will easily understand your code and easily reuse variables as well.

Most problems or issues comes out in poorly named variables are that they're not understandable to other developers and might take a long time to reuse the variables once you explain them. Others can cause bugs due to the misuse of the variables; you should let them understand in order to have easier and more efficient development.

Refactoring helps improve the readability of the code since I changed the unclear names and changed them into descriptive ones. Not just the variables, but I also include the functions as well for easier understanding of the code.

# Commenting & Documentation

You add comments when you're explaining your code, describing complex algorithms, documenting function inputs or outputs, and edge cases or assumptions. The following are the reasons when you should add comments: this is in order for your fellow developer to understand your code. 

Avoid comments when you repeat what the code already says. You can also code in a way where it can be self-explanatory in terms of people understanding your code. If the code is easy to understand, I don't think you need to put comments in it. 

# Avoiding Code Duplication

So the issue is that formulas and values are repetitive in the function, and it can just be reduced. Once these issues are simplified or refactored causes of bugs are possible from these formulas. This is the reason you should refactor the complexity of the duplication of code.

This improves the maintainability and the reusability of the formula since it was turned into a function that can calculate it directly. Therefore, refactoring duplicated code into a reusable function can make it efficient and simpler to use by other developers.
