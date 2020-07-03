import React, { useState, Fragment } from "react";
import { login } from "./utils";

const LoginUseState = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, showLoader] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    showLoader(true);

    try {
      await login(username, password);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      showLoader(false);
    } catch (error) {
      setError("Incorrect username or password");
      showLoader(false);
      setUsername("");
      setPassword("");
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <Fragment key="Logged">
            <h1>Welcome {username}</h1>
            <button onClick={() => setIsLoggedIn((prev) => !prev)}>
              Log Out
            </button>
          </Fragment>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeHolder="username"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
            <button type="submit" className="submit" disabled={isLoading}>
              {isLoading ? "Logging In" : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginUseState;
