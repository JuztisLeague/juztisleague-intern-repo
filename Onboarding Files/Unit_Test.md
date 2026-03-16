# Testing Redux with Jest

For this activity, I worked on testing a Redux counter slice that included a reducer and three actions — increment, decrement, and reset. The slice was created using createSlice from Redux Toolkit, where each action modified the value in the initial state. I wrote tests for the reducer to verify that the increment action correctly updated the counter value from 0 to 1.

The most challenging part of this activity was solving the (Provider) error. When I first ran my tests, Jest threw an error saying "could not find react-redux context value; please ensure the component is wrapped in a Provider." I kept looking through my component files but could not find what caused the problem. After researching and getting guidance from Claude AI, I learned that when testing a component that uses Redux hooks like useSelector and useDispatch, the component must be wrapped in a (Provider) with a real Redux store attached to it. To fix this, I created a helper function called renderWithStore that used configureStore to create a store and wrapped the component in (Provider store={store}) before rendering it in the test.

For structuring my Jest tests, I wrote two separate test blocks. The first one tested the reducer directly by passing an initial state of { value: 0 } and the increment action, then checking if the new value was 1. The second one tested the component by rendering it with renderWithStore and checking if the text "Redux Toolkit Counter Activity" appeared on the screen. I also wrote a separate test for mocking an API call using jest.mock("axios") and axios.get.mockResolvedValue() to return fake user data without making a real network request. I verified all my tests by running npm test in the terminal and confirmed that all 3 test suites passed successfully.

The difference between Redux tests and React component tests can be understood this way:

- Redux tests check how the state changes when an action is fired. They do not involve the screen at all. They also require a Redux store and a <Provider> wrapper when testing components that use Redux hooks.

- React component tests check what appears on the screen when the component renders. They focus on the visual output rather than the state logic.
