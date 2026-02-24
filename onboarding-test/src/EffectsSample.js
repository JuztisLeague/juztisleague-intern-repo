import React, { useEffect, useState, useRef } from "react";

const EffectExample = () => {

  const [data, setData] = useState(null);

  const controllerRef = useRef(null);


  useEffect(() => {

    console.log("Component Mounted");

    return () => {

      console.log("Component Unmounted");

      if (controllerRef.current) {

        controllerRef.current.abort();

        console.log("Fetch cancelled");

      }

    };

  }, []);


  const fetchData = async () => {

    controllerRef.current = new AbortController();

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          signal: controllerRef.current.signal
        }
      );

      const result = await response.json();

      console.log(result);

      setData(result);

    }
    catch (error) {

      console.log(error);

    }

  };


  return (

    <div>

      <h2>useEffect Example</h2>

      <button onClick={fetchData}>

        Fetch Data

      </button>


      {data && (

        <div>

          <h3>{data.title}</h3>

          <p>{data.body}</p>

        </div>

      )}

    </div>

  );

};

export default EffectExample;