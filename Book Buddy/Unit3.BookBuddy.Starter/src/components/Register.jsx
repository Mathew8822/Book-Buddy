import React from "react";
import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [error, setError] = useState(null);
  const [userError, setUserError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (email.length >= 5) {
      try {
        const result = await fetch(
          "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstname, lastname, email, password }),
          }
        );
        const data = await result.json();
        console.log(data);
        setToken(data.token);
      } catch (error) {
        setError(error.message);
      }
    } else {
        setUserError("Longer Username Needed");
    }
  }
  return (
    <>
      <h2>Register New Account:</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
      <label>
          First Name:{" "}
          <input
            placeholder="Jake"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            placeholder="McGuire"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email Address:{" "}
          <input
            placeholder="Blank@provider.com"
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
