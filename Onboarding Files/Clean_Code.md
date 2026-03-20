# Understanding Clean Code Principles

- **Simplicity** –  this means writing code that is as simple as possible while still solving the problem correctly. This also means that you must avoid unnecessary complexity and extra logic in the code.

- **Readability** –  this means that it must have clear variable names, proper spacing, and formatting. This means that when you code, you must take into consideration that other people read your code and reuse your code as well. 

- **Maintainability** – this is for your code to be organized, use small functions, and avoid duplication. For this, you must be able to maintain your code to be efficient and simpler. 

- **Consistency** –  this means that your naming conventions, formatting style, and file structure should be consistent. In coding, you must 

- **Efficiency** – This means that writing code must perform well and use resources properly. To have an efficient code, it must be able to run fast, use memory properly, and avoid unnecessary operations.


# Writing Unit Tests for Clean Code

Unit Test helps keep the code clean because it finds early bugs and it test small units to detect errors before the overall system is built. Another is that it makes the code safer to modify; once you can change code, tests are ensured not to break. I also improve code quality and save time in the long run.

Issues I have while testing are that the function logic doesn't match the expected behavior, and the input values in my test are incorrect. This causes the jest to show an error such as **"ReferenceError: calculatedDiscount is not defined"**. A simple fix which is to change the code manually.

# Handling Errors & Edge Cases

The issue with the original code is that it does not have the ability to check if the inputs are numbers, and also it doesn't prevent negative prices or invalid discounts. Those were the issues, and it was fixed once the introduction to error handling was made.

Error handling improves the reliability of your code because it handles the possibility of error coming out in your development. Implementing error handling is useful because it shows you what the possible errors in your code and you can adjust to that error where the program doesn't undergo that error.


Bad Error Handling:

<img width="357" height="305" alt="Image" src="https://github.com/user-attachments/assets/2f39668b-2cae-4834-9f6b-593bc9a0ed95" />

Good Error Handling:

<img width="455" height="557" alt="Image" src="https://github.com/user-attachments/assets/b776d317-7af4-49cf-82ad-5776849322df" />


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

- Stating the Obvious
Sample:

<img width="127" height="51" alt="Image" src="https://github.com/user-attachments/assets/0407198e-5008-4afa-a1a3-8a5c10a1c501" />

Solution:

<img width="301" height="57" alt="Image" src="https://github.com/user-attachments/assets/21cfe4dc-2391-48a3-964b-98f5e45ebd39" />

- Vague Comments
Sample:

<img width="286" height="85" alt="Image" src="https://github.com/user-attachments/assets/85368ae9-deac-47d6-8a43-5b2243e61be0" />

Solution:

<img width="323" height="96" alt="Image" src="https://github.com/user-attachments/assets/448930d5-21a9-40cc-ac23-95ba69babe8b" />

- Commented-out Code without Reason
Sample:

<img width="292" height="132" alt="Image" src="https://github.com/user-attachments/assets/0d92957e-3dbc-4347-9d72-db5b312dbaa3" />

Solution:

<img width="537" height="100" alt="Image" src="https://github.com/user-attachments/assets/3619461f-66f2-45b3-a751-4785f0efc677" />

-  Wrong and Outdated Comments
Sample:

<img width="217" height="95" alt="Image" src="https://github.com/user-attachments/assets/d494d181-851d-464c-99d9-0dbd8c49977c" />

Solution:

<img width="273" height="92" alt="Image" src="https://github.com/user-attachments/assets/44955fd4-e88b-4d86-a78f-8b02e930ca72" />

-  No comments on Complex Logic Codes
Sample:

<img width="453" height="76" alt="Image" src="https://github.com/user-attachments/assets/e2aceb66-dd23-47bb-b6a0-d8f76a438ba6" />

Solution:

<img width="540" height="90" alt="Image" src="https://github.com/user-attachments/assets/246b02c9-f7a1-4fc7-8162-a103bfce231e" />

# Avoiding Code Duplication

So the issue is that formulas and values are repetitive in the function, and it can just be reduced. Once these issues are simplified or refactored causes of bugs are possible from these formulas. This is the reason you should refactor the complexity of the duplication of code.

This improves the maintainability and the reusability of the formula since it was turned into a function that can calculate it directly. Therefore, refactoring duplicated code into a reusable function can make it efficient and simpler to use by other developers.
