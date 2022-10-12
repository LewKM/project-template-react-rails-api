import React, { useState } from "react";
import { Button, FormField, } from 'semantic-ui-react'

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
//   const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        email: email,
        bio,
      })
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
            <h1>Kindly Sign-Up</h1>
            <h2>In the form on your Right</h2>   
                <p>"Welcome to the community of traders."</p>

                <p>"The key to successful Forex trading is to always trade with the trend."</p>""
        </div>
        <div className="container">
        <h1>Sign UP</h1>
        <form className="form-center" onSubmit={handleSubmit}>
            <FormField>
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </FormField>
            <FormField>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                />
            </FormField>
            <FormField>
                <label htmlFor="password">Password Confirmation</label>
                <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
                />
            </FormField>
            <FormField>
                <label htmlFor="email">Email</label>
                <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </FormField>
            <FormField>
                <label htmlFor="bio">Bio</label>
                <textarea
                rows="3"
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                />
            </FormField>
            <FormField>
                <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
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

export default SignUpForm;