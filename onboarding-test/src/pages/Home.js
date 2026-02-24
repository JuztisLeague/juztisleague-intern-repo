import React from "react";
import {useNavigate} from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    function goToProfile(){
        navigate("/profile");
    }
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick = {goToProfile}> Go to Profile Page</button>
    </div>
  );
}

export default Home;