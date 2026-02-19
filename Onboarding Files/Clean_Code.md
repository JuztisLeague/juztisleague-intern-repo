# Writing Unit Tests for Clean Code

Unit Test helps keep the code clean because it finds early bugs and it test small units to detect errors before the overall system is built. Another is that it makes the code safer to modify; once you can change code, tests are ensured not to break. I also improve code quality and save time in the long run.

Issues I have while testing are that the function logic doesn't match the expected behavior, and the input values in my test are incorrect. This causes the jest to show an error such as **"ReferenceError: calculatedDiscount is not defined"**. A simple fix which is to change the code manually.
