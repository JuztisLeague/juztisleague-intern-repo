# Navigation with React Router

The advantages of client-side is that it has faster navigation, better user experience, reduce server load and preserves application state. These advantages make your application faster, smoother, generate less server traffic, and perform better.

# Working with Lists & User Input

What are some common issues when working with lists in React?
Common issues that you encounter working with lists in React are using index as your key, having no key at all, using non-unique keys, and poor performance of large lists. As for Index as your Key, it can lead to performance problems and unexpected behavior when the list order changes, or items are added or removed. As for no Key it causes a warning to have a key on each child in a list. You must also use unique identifiers in order for React to correctly track the list of items, and lastly, rendering thousands of list items at once can slow you application. 

# Handling State & User Input

When you change using setState, it will not re-render, the UI becomes inconsistent, and break the React's state system. Therefor your display won't increment the number, and the UI will be broken once you use the setState instead of the useState.

# Understanding Components & Props

Components are important in React because of their reusability, predictability through isolation, readability, and maintenance. Having components means you can reuse them once you have that component made, and you can change it in one file. As for its predictability through isolation, the component manages its own logic and state, which also makes debugging significantly faster.
