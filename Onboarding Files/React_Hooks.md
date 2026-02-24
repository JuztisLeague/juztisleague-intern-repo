# Preventing Unnecessary Renders with **useCallback**

The problems that useCallback solves are avoiding unnecessary function creations. The usual problem in React is that when a component re-renders, all of its functions are recreated. Using useCallback prevents unnecessary re-renders in React.

**useCallback** -  This memorizes a function, and it returns the same function reference. This is usually used in passing functions to children to avoid unnecessary re-renders.

**useMemo** - This memorizes any value or computation result, and it returns the computed value. This is usually used in expensive computations that you don't want to recalculate on every render of your program.

useCallback is not useful when the function is cheap and not passed as a prop. Another is that the child component does not care about function references. Lastly, it is not useful when the dependencies change every render of your program.

# Optimizing Performance with **useMemo**

useMemo improves performance by preventing expensive calculations from running on every render. Usually in React, the component re-renders and all the code inside the component runs again, including the heavy computations, which causes your app ot lag. By using useMemo, it remembers the result of the calculation, making it reuse its cached result.

You should avoid useMemo when the calculation is not expensive, which means the calculation that you created is already fast. Next is that the value changes every render; you must have values that don't change when you use useMemo. Lastly, over-optimizing small apps makes your code complex and harder to read.

If I remove useMemo from my implemented component, it would cause an expensive calculation every render, and this causes my application to slow down. 

# Understanding React Hooks: **useEffect**

You should use useEffect instead of handling logic when the component lifecycle events, fetching data automatically, and reacting to state changes. 

If you don't provide a dependency array, your code will run every single render, which causes performance issues and repeated API calls. 

Improper use of useEffect can cause app crashes, slow down the application, and slow down the UI. These usual problems are caused by infinite loops, repeated API calls, and unnecessary execution.
