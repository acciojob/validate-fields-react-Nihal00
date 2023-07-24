import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isTrue, setIsTrue] = useState("");

  function check(){
    if(name.trim() === ""){
      setIsTrue(false);
      return
    }
    
    if(password === ""){
      setIsTrue(false);
    } else {
      setIsTrue(true);
    }
    
   }

  return (
    <div>
      {/* Do not remove the main div */}
      <form>
        <label>
          UserName:
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {isTrue ? "" : <p style={{color: "red"}}>Both username and password are required</p>}
        <button type="submit" onClick={check}>Login</button>
      </form>
    </div>
  );
};

export default App;
