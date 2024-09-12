import React from "react";
import { useState } from "react";

export default function LoginForm({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [userError, setUserError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (email.length >= 5) {
      try {
        const result = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
        const data = await result.json();
        console.log(data);
        setToken(data.token);
      } catch (error) {
        setError(error.message);
      }
    } else {
        setUserError("Invalid Email Address");
    }
  }
  return (
    <>
      <h2>Login Here</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email Address:{" "}
          <input
            placeholder="Minimum 5 Characters"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      <p onSubmit={handleSubmit}>{userError}</p>
    </>
  );
}
