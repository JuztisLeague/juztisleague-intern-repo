# Preventing Unnecessary Renders with **useCallback**

The problems that useCallback solves are avoiding unnecessary function creations. The usual problem in React is that when a component re-renders, all of its functions are recreated. Using useCallback prevents unnecessary re-renders in React.

**useCallback** -  This memorizes a function, and it returns the same function reference. This is usually used in passing functions to children to avoid unnecessary re-renders.

**useMemo** - This memorizes any value or computation result, and it returns the computed value. This is usually used in expensive computations that you don't want to recalculate on every render of your program.

useCallback is not useful when the function is cheap and not passed as a prop. Another is that the child component does not care about function references. Lastly, it is not useful when the dependencies change every render of your program.
