
// useCallback, useMemo, and useEffect Activities

/*import React, { useState, useCallback } from "react";
import LargeList from "./Largelist.js";
import EffectExample from "./EffectsSample.js";

// Child component (memoized)
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h1>Parent Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <Child onClick={handleClick} />
      <EffectExample/>
      <LargeList/>
    </div>
  );
};

export default Parent;*/


// React Router Activity
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {

  return (

    <BrowserRouter>

      <div>

        <h1>Internship Sample Website</h1>

        {/* Navigation */}
        <nav>

          <Link to="/">Home</Link>

          <br />

          <Link to="/profile">Profile</Link>

        </nav>

        <hr />

        {/* Routes */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;