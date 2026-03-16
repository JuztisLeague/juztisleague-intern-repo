# Testing Redux with Jest

The most challenging part of testing Redux is finding which caused the problem in my App.js file. I kept looking and looking, but still found no solution to the problem. After everything, I resorted to using Claude AI, and then it gave me an Idea on what to solve, and then everything worked after it. To specify which problem it is, the <Provider> setup. 


So the difference is that on Redux Test, it is the state that changes that you will test, as for the React Component, it is the rendering on the screen. For the Redux Test, it needs a Store and a Provider.
