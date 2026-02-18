# Static Analysis Checks in CI/CD

The purpose of CI and CD is to have automation for building, testing, and deploying your code. This is in order for developers to detect bugs, have quicker development cycles, and have reliable builds.

This improves the consistency of the code during development, which shows the needed documentation you need to follow. Not only consistency but also the readability and maintainability of the development, which makes other team members to read and debug your code. Lastly, it can reduce human error since it doesn't rely on manual checking. 

The challenges that can occur in enforcing checks using CI/CD are the following: False Positives / False Negatives, Developer Frustration, and Pipeline Complexity. The tests or linters may fail due to minor issues or irrelevant reasons. Adding multiple checks can lead to the pipelines running slowly and being hard to maintain. Lastly, strict checks can block commits if not communicated well.
 
This differs in a small project due to having fewer contributors, minimal testing, easy to fix, and simple. This doesn't need a CI/CD pipeline since small projects are simple and easier to detect mistakes. As for the large projects, you have many developers, and it is pretty much needed in order to be efficient in developing your application.
