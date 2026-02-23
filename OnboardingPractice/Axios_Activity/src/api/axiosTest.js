global.localStorage = {
    getItem: (key) => {
      if (key === "authToken") return "MY_FAKE_TOKEN"; 
      return null;
    },
  };
import axiosInstance from "./axioInstance.js";
  
async function testPostRequest() {

    const postData = {
        title: "Focus Bear Onbaording Activity",
        body: "Axios Activity - Generate Post Request",
        userId: 22102112,
      };
    try {
      
      const response = await axiosInstance.post("/posts", postData);
  
    console.log("Response status:", response.status);   
    console.log("Response data:", response.data);       
    console.log("Title:", response.data.title);         
    console.log("Body:", response.data.body);           
    console.log("UserId:", response.data.userId);       
  
      if (response.status === 201) {
        console.log("Redirecting to /posts page...");
      }

    } catch (error) {
      console.log("Request failed:", error.message);
    }
  }
  
  testPostRequest();