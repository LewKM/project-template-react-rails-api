import React, { useState } from "react";
import { Button, Input, FormField } from 'semantic-ui-react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        // r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div id="createchart">
      <div id ="qoutes">
        <h1>Kindly Login</h1>
        <h2>In the form on your Right</h2>
        <p>"Welcome to the community of traders."</p>
        <p>"The key to successful Forex trading is to always trade with the trend."</p>
      </div>
      <div className="container">
        <h1>Log In</h1>
        <form className="form-center" onSubmit={handleSubmit}>
          <FormField>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              id="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormField>
          <FormField>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button variant="fill" color="primary" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </FormField>
          {/* <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField> */}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;