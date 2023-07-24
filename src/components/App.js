import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  function check() {
    if (name.trim() === "") {
      setIsTrue(false);
      return;
    }

    if (password === "") {
      setIsTrue(false);
      return;
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
        <button type="submit" onClick={check}>
          Login
        </button>
      </form>
      {isTrue ? (
        ""
      ) : (
        <p style={{ color: "red" }}>Both username and password are required</p>
      )}
    </div>
  );
};

export default App;
